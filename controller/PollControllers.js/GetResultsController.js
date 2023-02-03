import { ObjectId } from "mongodb";
import { pollCollection, choicesCollection, votesCollection } from "../../config/database.js";

export async function getResults(req, res) {
  try {
    const pollId = req.params.id;
    const poll = await pollCollection.find({ _id: pollId }).toArray();

    const choices = await choicesCollection
      .find({ pollId: pollId })
      .toArray();
    const choiceIds = choices.map((choice) => choice._id);

    const votedChoices = await votesCollection
      .find({ choiceId: { $in: choiceIds } })
      .toArray();
    if (!votedChoices[0]) {
      const result = { title: "", votes: 0 };
      return res.send(result);
    }

    const count = votedChoices.reduce((acc, vote) => {
      acc[vote.choiceId] = (acc[vote.choiceId] || 0) + 1;
      return acc;
    }, {});
    let maxVotes = 0;
    let leadingChoices = [];
    for (let key in count) {
      if (count[key] > maxVotes) {
        maxVotes = count[key];
        leadingChoices = [{ id: key, votes: count[key] }];
      } else if (count[key] === maxVotes) {
        leadingChoices.push({ id: key, votes: count[key] });
      }
    }
    const searchedIds = leadingChoices.map((choice) => ObjectId(choice.id));
    const votes = leadingChoices.map((choice) => choice.votes);
    let result = await choicesCollection
      .find(
        {
          _id: { $in: searchedIds },
        },
        { projection: { pollId: 0 } }
      )
      .toArray();

    if (!result[1]) {
      const output = { title: result[0].title, votes: votes[0] };
      return res.send(output);
    }

    result = result.map((choice) => {
      leadingChoices.map((obj) => {
        if (obj.id == choice._id) {
          choice.votes = obj.votes;
        }
      });

      return { title: choice.title, votes: choice.votes };
    });

    poll[0].result = result;

    res.send(poll);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
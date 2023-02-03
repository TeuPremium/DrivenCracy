import { ObjectId } from "mongodb";
import { pollCollection, choicesCollection, votesCollection} from "../../config/database.js";

export async function GetResults(req, res){
    try {
        const { _id } = res.locals;
        console.log("=========")

        const poll = await pollCollection.find({ _id }).toArray();
        
        const { pollId, expireAt, title} = poll;

        
        const choiceCollection = await choicesCollection
        .find({ pollId: pollId }, { projection: { title: 0, pollId: 0 } })
        .toArray();
        let choiceIds = choiceCollection.map((n) => n._id);
        // console.log(choiceCollection)
        
        console.log(choiceIds)

        const votedChoices = await choiceIds.map((n) => {
             votesCollection
        .find({ choiceId: n })
        .toArray();
        
        })
        let vote = await votesCollection
        .find()
        .toArray();
        await console.log(vote)

        console.log(votedChoices)

        // const choiceCollection = await choicesCollection.find().toArray()
        res.send(choiceCollection);

        
        // if (!votedChoices[0]) {
        //     const result = { title: "", votes: 0 };
        //     return res.send(result);
        // }
        
      } catch (error) {
        res.status(500).send(error.message);
      }

    };
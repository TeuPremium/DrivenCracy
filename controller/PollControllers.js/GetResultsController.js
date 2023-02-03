import { ObjectId } from "mongodb";
import { pollCollection, choicesCollection, votesCollection} from "../../config/database.js";

export async function GetResults(req, res){
    try {
        // const { _id } = res.locals;
        // console.log("aaaaaaaaaaaa")
        // const polls = await pollCollection.find({ _id }).toArray();
        // console.log(polls)

        // let choiceCollection = await choicesCollection
        // .find({ pollId: _id }, { projection: { title: 0, pollId: 0 } })
        // .toArray();
        // choiceCollection = choiceCollection.map((id) => id._id);
  
        // const choiceList = await votesCollection
        // .find({ choiceId: { $in: choiceCollection } })
        // .toArray();
        // if (!choiceList[0]) {
        // const result = { title: "", votes: 0 };
        // return res.send(result);
        // }

        const choiceCollection = await votesCollection.find().toArray()
        res.send(choiceCollection);
      } catch (error) {
        res.status(500).send(error.message);
      }
    };
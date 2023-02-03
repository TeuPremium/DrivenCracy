import { ObjectId } from "mongodb";
import { pollCollection, choicesCollection, votesCollection} from "../../config/database.js";

export async function GetResults(req, res){
    try {
        const { _id } = res.locals;
        console.log("aaaaaaaaaaaa")

        const poll = await pollCollection.find({ _id }).toArray();
        
        const { pollId, expireAt, title} = poll;

        
        const choiceCollection = await choicesCollection
        .find({ pollId: pollId }, { projection: { title: 0, pollId: 0 } })
        .toArray();
        let choiceIds = choiceCollection.map((n) => ObjectId(n._id).str);

        const votedChoices = await choiceIds.map((n) => {
             votesCollection
        .find({ choiceId: n })
        .toArray();
        console.log(ObjectId(ObjectId(n).str))
        })

    
        const choiceColllection = await choicesCollection.find().toArray()
        res.send(choiceColllection);

        console.log(choiceIds)
        
        // if (!votedChoices[0]) {
        //     const result = { title: "", votes: 0 };
        //     return res.send(result);
        // }
        
      } catch (error) {
        res.status(500).send(error.message);
      }

    };
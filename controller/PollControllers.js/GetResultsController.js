import { ObjectId } from "mongodb";
import { pollCollection, choicesCollection, votesCollection} from "../../config/database.js";

export async function GetResults(req, res){
    try {
        const { _id } = res.locals;
       
        console.log(_id)
        res.send(_id);
      } catch (error) {
        res.status(500).send(error.message);
      }
    };
import { pollCollection } from "../../config/database.js";
import { ObjectId } from "mongodb";

export async function validatePoll(req, res, next) {
    const { pollId } = req.body;
    
    try{
        const pollExists = await pollCollection.findOne({
        _id: ObjectId(pollId),
    });

    pollExists ? next() : res.sendStatus(404) 
    
    console.log(pollExists)
    } catch(error){
        res.status(500).send(error.message)
    }
  
}
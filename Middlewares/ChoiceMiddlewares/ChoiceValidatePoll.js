import dayjs from "dayjs";
import { pollCollection } from "../../config/database.js";
import { ObjectId } from "mongodb";

export async function validatePoll(req, res, next) {
    const { pollId } = req.body;
    console.log(pollId)

    try{
        const pollCreated = await pollCollection.findOne({
        _id: ObjectId(pollId),
    });

    pollCreated ? next() : res.sendStatus(404) 
    
    console.log(pollCreated)
    } catch(error){
        res.status(500).send(error.message)
    }
  
}
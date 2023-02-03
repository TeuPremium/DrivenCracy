import { choicesCollection, pollCollection } from "../../config/database.js";
import { ObjectId } from "mongodb";
import dayjs from "dayjs";

export async function validateExpiredChoice(req, res, next) {
    const  choiceId  = req.params.id;
    try{
        const choice = await choicesCollection.findOne({_id: ObjectId(choiceId)});
        const poll = await pollCollection.findOne({
            _id: ObjectId(choice.pollId),
        }); 
        
        (dayjs(poll.expireAt).isBefore(dayjs())) ? res.sendStatus(403) : next() 

    } catch(error){
        res.status(500).send(error.message)
    }
}
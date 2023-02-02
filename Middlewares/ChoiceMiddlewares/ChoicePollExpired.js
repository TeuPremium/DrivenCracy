import { pollCollection } from "../../config/database.js";
import { ObjectId } from "mongodb";
import dayjs from "dayjs";

export async function validateExpiredPoll(req, res, next) {
    const { pollId } = req.body;

    try{
        const poll = await pollCollection.findOne({
        _id: ObjectId(pollId),
    });


    (dayjs(poll.expireAt).isBefore(dayjs())) ? res.sendStatus(403) : next() 
    
    console.log(poll)
    } catch(error){
        res.status(500).send(error.message)
    }
}
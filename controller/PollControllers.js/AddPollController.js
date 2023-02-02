import { pollCollection } from "../../config/database.js";
import { ObjectId } from "mongodb";
import dayjs from "dayjs";


export async function addPoll(req, res){
    const { title, expireAt } = req.body
    let timestamp = expireAt? dayjs(expireAt).format("YYYY-MM-DD HH:mm") : dayjs().add(30, "day").format("YYYY-MM-DD HH:mm")
    

    try {          
        const poll = await pollCollection.insertOne({ title, expireAt: timestamp });

        const pollCreated = await pollCollection.findOne({
            _id: ObjectId(poll.insertedId),
        });

        res.status(201).send(pollCreated);

        } catch (error) {
        res.status(500).send(error.message);  
    }
}
import { pollCollection } from "../../config/database.js";
import { ObjectId } from "mongodb";
import dayjs from "dayjs";


export async function addPoll(req, res){
    const { title, expireAt } = req.body
    let timestamp = dayjs(expireAt).format("YYYY-MM-DD HH:mm") || dayjs().add(30, "d").format("YYYY-MM-DD HH:mm")
    

    try {          
        const pollid = await pollCollection.insertOne({ title, expireAt: timestamp });

        const poll = await pollCollection.findOne({
            _id: ObjectId(pollid.insertedId),
        });

        res.status(201).send(poll);

        } catch (error) {
        res.status(500).send(error.message);  
    }
}
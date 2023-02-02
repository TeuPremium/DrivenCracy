import { pollCollection } from "../../config/database.js";
import { ObjectId } from "mongodb";

export async function AddChoice(req, res){
    const { title, pollId } = req.body 
    try {          
        // const pollid = await pollCollection.find({ _id: pollId }).toArray();
        // console.log(pollid)
        // res.send(pollid);

        res.sendStatus(200)

        } catch (error) {
        res.status(500).send(error.message);  
    }
}
import { pollCollection } from "../../config/database.js";

export async function GetPolls(req, res){
    try {          
        const poll = await pollCollection.find().toArray();
        res.send(poll);
        } catch (error) {
        res.status(500).send(error.message);  
    }
}
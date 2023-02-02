import { pollCollection } from "../../config/database.js";
import { ObjectId } from "mongodb";

export async function validateChoiceExists(req, res, next) {
    const { pollId, title } = req.body;
    
    try{
        const pollExists = await pollCollection.findOne({
             title: title
        });
        
        pollExists ?  res.sendStatus(409) : next()  
        console.log("pollExists")
        console.log(pollExists)
        
    } catch(error){
        res.status(500).send(error.message)
    }
  
}
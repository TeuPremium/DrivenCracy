import { pollCollection } from "../../config/database.js";
import { ObjectId } from "mongodb";

export async function validateChoiceExists(req, res, next) {
    const { pollId, title } = req.body;
    
    try{
        const choiceExists = await pollCollection.findOne({
            pollId: pollId,
            title: title
        });
        
        choiceExists ?  res.sendStatus(409) : next()  
        console.log("pollExists")
        console.log(choiceExists)
        
    } catch(error){
        res.status(500).send(error.message)
    }
  
}
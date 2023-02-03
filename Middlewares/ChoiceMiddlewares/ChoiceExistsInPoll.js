import { choicesCollection } from "../../config/database.js";
import { ObjectId } from "mongodb";

export async function validateChoiceExists(req, res, next) {
    const { pollId, title } = req.body;
    
    try{
        const choiceExists = await choicesCollection.findOne({
            pollId: pollId,
            title: title
        });
        
        if(choiceExists){res.sendStatus(409)}
        else {next()}  
        
    } catch(error){
        res.status(500).send(error.message)
    }
  
}
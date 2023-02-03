import { choicesCollection } from "../../config/database.js";
import { ObjectId } from "mongodb";

export async function choiceExists(req, res, next) {
    const  choiceId  = req.params.id ;
    
    try{
        const pollExists = await choicesCollection.findOne({
        _id: ObjectId(choiceId),
    });

    pollExists ? next() : res.sendStatus(404) 
    
    console.log(pollExists)
    } catch(error){
        res.status(500).send(error.message)
    }
  
}

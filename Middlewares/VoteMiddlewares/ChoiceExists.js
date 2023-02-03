import { choicesCollection } from "../../config/database.js";
import { ObjectId } from "mongodb";

export async function choiceExists(req, res, next) {
    const  choiceId  = req.params.id ;
    try{
        const choiceExists = await choicesCollection.findOne({
        _id: ObjectId(choiceId),
    });

    if(choiceExists) {
        next()
    } else{
        res.sendStatus(404)
    } 
    
    } catch(error){
        res.status(500).send(error.message)
    }
  
}

import { choicesCollection } from "../../config/database.js";

export async function getChoice(req, res){
    const pollId  = req.params.id
    console.log(pollId)
    try {          
        const choices = await choicesCollection.find({ pollId }).toArray();
        
        console.log(choices)
        

        res.send(choices)

        } catch (error) {
        res.status(500).send(error.message);  
    }
}
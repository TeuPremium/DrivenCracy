import { choicesCollection } from "../../config/database.js";

export async function getChoice(req, res){
    const PollId  = req.params.id
    try {          
        const pollcreated = await choicesCollection.findOne({ pollId: pollId });
        
        console.log(pollcreated)
        

        res.sendStatus(201)

        } catch (error) {
        res.status(500).send(error.message);  
    }
}
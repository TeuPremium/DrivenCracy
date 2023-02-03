import { choicesCollection } from "../../config/database.js";

export async function AddChoice(req, res){
    const { title, pollId } = req.body 
    try {          
        const poll = await choicesCollection.insertOne({ title: title, pollId: pollId });
        const pollcreated = await choicesCollection.findOne({ title: title, pollId: pollId });       
        console.log(pollcreated)
        res.sendStatus(201)

        } catch (error) {
        res.status(500).send(error.message);  
    }
}
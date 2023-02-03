import { choicesCollection } from "../../config/database.js";
import dayjs from "dayjs";
import { ObjectId } from "mongodb"

export async function postVote(req, res){
    const choiceId  = req.params.id

    try {          
        await choicesCollection.insertOne({
            createdAt: dayjs().format("YYYY-MM-DD HH:mm"),
            choiceId: ObjectId(choiceId),
          })    

        res.sendStatus(201)

        } catch (error) {
        res.status(500).send(error.message);  
    }
}
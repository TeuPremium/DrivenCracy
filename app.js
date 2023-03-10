import express from "express"
import cors from "cors"
import pollRouter from "./routers/PollRoutes.js"
import choiceRouter from "./routers/ChoiceRoutes.js"


const app = express()
app.use(express.json())
app.use(cors())

app.use([pollRouter, choiceRouter])

const PORT = 5000;
app.listen(PORT, ()=>{console.log(`Listening on ${PORT}`)})

import { Router } from 'express'
import { getPollMiddleware, PollPostSchemaValidation } from '../Middlewares/PollMiddleware.js'
import { addPoll } from '../controller/PollControllers.js/AddPollController.js'

const pollRouter = Router()


pollRouter.post("/poll", PollPostSchemaValidation, addPoll)
pollRouter.get("/poll", getPollMiddleware)


export default pollRouter
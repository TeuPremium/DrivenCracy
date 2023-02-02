
import { Router } from 'express'
import { getPollMiddleware, PollPostSchemaValidation } from '../Middlewares/PollMiddleware.js'
import { addPoll } from '../controller/PollControllers.js/AddPollController.js'
import { GetPolls } from '../controller/PollControllers.js/GetPollController.js'

const pollRouter = Router()


pollRouter.post("/poll", PollPostSchemaValidation, addPoll)
pollRouter.get("/poll", GetPolls)


export default pollRouter
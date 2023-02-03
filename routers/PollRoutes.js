
import { Router } from 'express'
import { getPollMiddleware, PollPostSchemaValidation } from '../Middlewares/PollMiddleware.js'
import { addPoll } from '../controller/PollControllers.js/AddPollController.js'
import { GetPolls } from '../controller/PollControllers.js/GetPollController.js'
import { validatePollGet } from '../Middlewares/ChoiceMiddlewares/ChoiceValidatePoll.js'
import { getResults } from '../controller/PollControllers.js/GetResultsController.js'


const pollRouter = Router()


pollRouter.post("/poll", PollPostSchemaValidation, addPoll)
pollRouter.get("/poll", GetPolls)
pollRouter.get("/poll/:id/result", validatePollGet, getResults )

export default pollRouter
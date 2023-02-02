import { Router } from 'express'
import { AddChoice } from '../controller/VoteControllers.js/ChoicePostController.js'
import { ChoicePostSchemaValidation } from '../Middlewares/ChoiceMiddlewares/ChoicePostMiddleware.js'
import { validatePoll } from '../Middlewares/ChoiceMiddlewares/ChoiceValidatePoll.js'


const choiceRouter = Router()


choiceRouter.post("/choice", ChoicePostSchemaValidation, validatePoll, AddChoice)
// choiceRouter.get("/home", listchoices)




export default choiceRouter
import { Router } from 'express'
import { AddChoice } from '../controller/VoteControllers.js/ChoicePostController.js'
import { validateExpiredPoll } from '../Middlewares/ChoiceMiddlewares/ChoicePollExpired.js'
import { ChoicePostSchemaValidation } from '../Middlewares/ChoiceMiddlewares/ChoicePostMiddleware.js'
import { validatePoll } from '../Middlewares/ChoiceMiddlewares/ChoiceValidatePoll.js'


const choiceRouter = Router()


choiceRouter.post("/choice", ChoicePostSchemaValidation, validatePoll, validateExpiredPoll, AddChoice)
// choiceRouter.get("/home", listchoices)




export default choiceRouter
import { Router } from 'express'
import { AddChoice } from '../controller/VoteControllers.js/ChoicePostController.js'
import { getChoice } from '../controller/VoteControllers.js/ChoicesGetController.js'
import { validateChoiceExists } from '../Middlewares/ChoiceMiddlewares/ChoiceExistsInPoll.js'
import { validateExpiredPoll } from '../Middlewares/ChoiceMiddlewares/ChoicePollExpired.js'
import { ChoicePostSchemaValidation } from '../Middlewares/ChoiceMiddlewares/ChoicePostMiddleware.js'
import { validatePoll, validatePollGet } from '../Middlewares/ChoiceMiddlewares/ChoiceValidatePoll.js'
import { choiceExists } from '../Middlewares/VoteMiddlewares/ChoiceExists.js'



const choiceRouter = Router()


choiceRouter.post("/choice", ChoicePostSchemaValidation, validatePoll, validateExpiredPoll, validateChoiceExists,  AddChoice)
choiceRouter.get("/:id/choice", validatePollGet, getChoice)
choiceRouter.get("/choice/:id/vote", choiceExists)

export default choiceRouter
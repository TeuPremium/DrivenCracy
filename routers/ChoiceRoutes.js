import { Router } from 'express'
import { AddChoice } from '../controller/Controllers.js/ChoicePostController.js'
import { getChoice } from '../controller/Controllers.js/ChoicesGetController.js'
import { postVote } from '../controller/Controllers.js/VotePostController.js' 
import { validateChoiceExists } from '../Middlewares/ChoiceMiddlewares/ChoiceExistsInPoll.js' 
import { validateExpiredPoll } from '../Middlewares/ChoiceMiddlewares/ChoicePollExpired.js' 
import { ChoicePostSchemaValidation } from '../Middlewares/ChoiceMiddlewares/ChoicePostMiddleware.js' 
import { validatePoll, validatePollGet} from '../Middlewares/ChoiceMiddlewares/ChoiceValidatePoll.js'
import { choiceExists } from '../Middlewares/VoteMiddlewares/ChoiceExists.js' 
import { validateExpiredChoice } from '../Middlewares/VoteMiddlewares/PollExpired.js'



const choiceRouter = Router()


choiceRouter.post("/choice", ChoicePostSchemaValidation, validatePoll, validateExpiredPoll, validateChoiceExists,  AddChoice)
choiceRouter.get("/:id/choice", validatePollGet, getChoice)
choiceRouter.post("/choice/:id/vote", choiceExists, validateExpiredChoice, postVote)

export default choiceRouter
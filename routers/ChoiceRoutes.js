import { Router } from 'express'
import { AddChoice } from '../controller/ChoiceControllers/ChoicePostController.js'
import { getChoice } from '../controller/ChoiceControllers/ChoicesGetController.js'
import { postVote } from '../controller/ChoiceControllers/VotePostController.js' 
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
import { Router } from 'express'
import { ChoicePostSchemaValidation } from '../Middlewares/ChoiceMiddlewares/ChoicePostMiddleware.js'

const choiceRouter = Router()


choiceRouter.post("/choice", ChoicePostSchemaValidation)
// choiceRouter.get("/home", listchoices)




export default choiceRouter
import { Router } from 'express'

const entrieRouter = Router()


entrieRouter.post("/novaentrada", addEntrie)
entrieRouter.get("/home", listEntries)

entrieRouter.post("/novasaida", addExit)


export default entrieRouter
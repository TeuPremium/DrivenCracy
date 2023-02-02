import { pollSchema } from "../model/Schemas/PollSchema.js";

export function PollPostSchemaValidation(req, res, next) {
    const { title, expireAt } = req.body;
    
    const { error } = pollSchema.validate({ title, expireAt }, { abortEarly: false });
  
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(422).send(errors);
    }
  
    next();
  }
  
  export function getPollMiddleware(req, res, next) {
    //Nothing to validate, go next!
    next();
  }
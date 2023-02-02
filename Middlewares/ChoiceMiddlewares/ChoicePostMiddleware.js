import { voteSchema } from "../../model/Schemas/VoteSchema.js";

export function ChoicePostSchemaValidation(req, res, next) {
    const { title, pollId } = req.body;
    
    const { error } = voteSchema.validate({ title, pollId }, { abortEarly: false });
  
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(422).send(errors);
    }
  
    next();
  }
  
import joi from 'joi'

export const entrieSchema = joi.object({
  title: joi.string().required(),
  pollId: joi.string().required(),
  });

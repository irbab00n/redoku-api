const Joi = require('joi');

const schema = Joi.object().keys({
  puzzle_id: Joi.number().required(),
  solution: Joi.string().required(),
  time: Joi.string().required() // Add once seeds file has been updated
});

module.exports = schema;
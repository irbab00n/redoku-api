const Joi = require('joi');

const schema = Joi.object().keys({
  puzzle_id: Joi.number().required(),
  solution: Joi.string().required()
});

module.exports = schema;
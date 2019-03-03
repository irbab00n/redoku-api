const Joi = require('joi');

const { Solution } = require('../models');
const schemas = require('../schemas');

/**
 * Returns a promise initiated from the supplied puzzle_ids
 * @param {Number} puzzleId - ID of the puzzle we want to pull out all of the solutions for
 * @returns {Promise} - Knex-based promise returned with 'then' and 'catch' blocks available
 */
module.exports.findSolutions = (puzzleId) => {
  return Solution.where({puzzle_id: puzzleId}).fetchAll();
}

/**
 * Checks for a supplied solution in the request body, validates the shape using JOI
 * Creates a new solution entry and returns that solution to the user
 * @param {Object} req - Request object from Express
 * @param {Object} res - Response object from Express
 */
module.exports.create = (req, res) => {
  const { solution } = req.body;

  if (solution === undefined) {
    console.log('\nMissing parameter: \n\nsolution\n\n');
    res.status(422).send('Missing parameter: solution');
    return;
  }

  const { error } = Joi.validate(solution, schemas.solution);
  if (error) {
    console.log('\nJoi validation failed with solution: \n\n', solution);
    console.log(`\n${error.name}:\n\n`, error.details);
    res.status(422).send(error.details);
    return;
  } 

  Solution.forge(solution).save()
    .then(solution => {
      res.status(201).send(solution);
    })
    .catch(error => {
      console.log('Something went wrong while attempting to save a new solution: ', error);
      res.status(500).send({
        message: 'Something went wrong while attempting to save a new solution',
        error
      });
    });
};
const Joi = require('joi');

const { Solution } = require('../models');
const schemas = require('../schemas');

module.exports.findSolutions = (puzzleId) => {
  return Solution.where({puzzle_id: puzzleId}).fetchAll();
}

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
  } else {
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
  }
};

// module.exports.delete = (req, res) => {

//   res.status(202).send('Successfully removed a Solution');

// };
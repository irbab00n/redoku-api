const { Puzzle } = require('../models/');

module.exports.fetchPuzzle = (req, res) => {

  console.log('Running the fetchPuzzle method: ', req);

  res.status(200).send('Reached the fetchPuzzle controller');

};
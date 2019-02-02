const { Puzzle } = require('../models/');
const getRandomIndexFromRange = require('../helpers/getRandomIndexFromRange');

module.exports.fetchPuzzle = (req, res) => {

  const { difficulty } = req.query;

  if (difficulty === undefined) {
    Puzzle.fetchAll()
      .then(puzzles => {
        let status = puzzles.length > 0 ? 200 : 204;
        let randomPuzzle = puzzles.length > 0 ? puzzles.slice()[getRandomIndexFromRange(0, puzzles.length - 1)] : {};
        res.status(status).send(randomPuzzle);
      })
      .catch(error => {
        console.log('something went wrong fetching all puzzles from the database: ', error);
        res.status(500).send(error);
      });
  } else {
    Puzzle.where({difficulty}).fetchAll()
      .then(puzzles => {
        let status = puzzles.length > 0 ? 200 : 204;
        let randomPuzzle = puzzles.length > 0 ? puzzles.slice()[getRandomIndexFromRange(0, puzzles.length - 1)] : {};
        res.status(status).send(randomPuzzle);
      })
      .catch(error => {
        console.log('something went wrong fetching puzzles by difficulty', error);
        res.status(500).send(error);
      });
  }

};
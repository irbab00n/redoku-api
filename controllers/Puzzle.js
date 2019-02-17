const { Puzzle } = require('../models');
const getRandomIndexFromRange = require('../helpers/getRandomIndexFromRange');

/**
 * Returns random puzzle from list, or empty object if list is empty
 * @param {Array} puzzles - List of puzzle entries retrieved from the database
 * @returns {Object} - Random puzzle or empty object
 */
const selectRandomPuzzleFromList = puzzles => {
  if (puzzles.length > 0) {
    let randomIndex = getRandomIndexFromRange(0, puzzles.length - 1);
    return puzzles.slice()[randomIndex]; 
  } else {
    return {};
  }
};

/**
 * @name fetchPuzzle
 * @description - Controller method used to retrieve a random puzzle from the database.
 * 
 * --- AVAILABLE REQ.QUERY PARAMS ---
 * @property {String} difficulty (OPTIONAL) - difficulty of the puzzle to query
 *   Supported difficulties:
 *      easy
 *      medium
 *      hard
 */
module.exports.fetchPuzzle = (req, res) => {

  const { difficulty } = req.query;

  if (difficulty === undefined) {
    Puzzle.fetchAll()
      .then(puzzles => {
        let status = puzzles.length > 0 ? 200 : 204; // 200 = success, items retrieved -- 204 = success, no items
        let randomPuzzle = selectRandomPuzzleFromList(puzzles);
        res.status(status).send(randomPuzzle);
      })
      .catch(error => {
        console.log('something went wrong fetching all puzzles from the database: ', error);
        res.status(500).send(error);
      });
  } else {
    Puzzle.where({difficulty: difficulty.toLowerCase()}).fetchAll()
      .then(puzzles => {
        let status = puzzles.length > 0 ? 200 : 204; // 200 = success, items retrieved -- 204 = success, no items
        let randomPuzzle = selectRandomPuzzleFromList(puzzles);
        res.status(status).send(randomPuzzle);
      })
      .catch(error => {
        console.log('something went wrong fetching puzzles by difficulty', error);
        res.status(500).send(error);
      });
  }

};
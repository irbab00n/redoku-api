const { Puzzle } = require('../models');
const SolutionController = require('./Solution');
const getRandomIndexFromRange = require('../helpers/getRandomIndexFromRange');


/*
██╗      ██████╗  ██████╗ █████╗ ██╗     
██║     ██╔═══██╗██╔════╝██╔══██╗██║     
██║     ██║   ██║██║     ███████║██║     
██║     ██║   ██║██║     ██╔══██║██║     
███████╗╚██████╔╝╚██████╗██║  ██║███████╗
╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝                                         
 */

/**
 * Generates success status code depending on the length of the results passed in 
 * @param {Collection} results - List of results in the form of a JS Collection.  Has a length property to access
 * @returns {Number} - Status cod representing results found or not found
 */
const generateSuccessStatus = results => (
  results.length > 0 ? 200 : 204
);

/**
 * Will log the error, and then respond to the client with a 500 status code, indicating an internal server error
 * @param {Object} error - Error object containing all relative information to how and why a failure occurred
 * @param {Object} res - Response object necessary for responding to requests 
 */
const processQueryFailure = (error, res) => {
  console.log('something went wrong fetching puzzles by difficulty', error);
  res.status(500).send(error);
};

/**
 * Receives a list of results and the response object
 * Will generate a status, select a puzzle at random, then return to cliet
 * @param {Colletion} results - List of results in the form of a JS Collection.  Has a length property to access
 * @param {Object} res - Response object necessary for responding to requests
 */
const processQuerySuccess = (results, res) => {
  let status = generateSuccessStatus(results); // 200 = success, items retrieved -- 204 = success, no items
  let randomPuzzle = selectRandomPuzzleFromList(results);
  res.status(status).send(randomPuzzle);
};

/**
 * Receives a list of results and the response object
 * Will generate a status, select a puzzle at random, find the solutions for that puzzle, then return to cliet
 * @param {Colletion} results - List of results in the form of a JS Collection.  Has a length property to access
 * @param {Object} res - Response object necessary for responding to requests
 */
const processQuerySuccessWithSolutions = (results, res) => {
  let status = generateSuccessStatus(results); // 200 = success, items retrieved -- 204 = success, no items
  let randomPuzzle = selectRandomPuzzleFromList(results);
  SolutionController.findSolutions(randomPuzzle.id)
    .then(solutions => {
      // console.log('solutions retreived for puzzle: ', JSON.stringify(solutions));
      // console.log('current puzzle selected: ', randomPuzzle);
      randomPuzzle.solutions = solutions;
      res.status(status).send(randomPuzzle);
    })
    .catch(error => {
      console.log('something went wrong while trying to fetch solutions for the current puzzle: ', error);
    }); 
};

/**
 * Returns random puzzle from list, or empty object if list is empty
 * @param {Array} puzzles - List of puzzle entries retrieved from the database
 * @returns {Object} - Random puzzle or empty object
 */
const selectRandomPuzzleFromList = puzzles => {
  if (puzzles.length > 0) {
    let randomIndex = getRandomIndexFromRange(0, puzzles.length - 1);
    return JSON.parse(JSON.stringify(puzzles))[randomIndex]; 
  } else {
    return {};
  }
};


/*
███████╗██╗  ██╗██████╗  ██████╗ ██████╗ ████████╗███████╗
██╔════╝╚██╗██╔╝██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝
█████╗   ╚███╔╝ ██████╔╝██║   ██║██████╔╝   ██║   ███████╗
██╔══╝   ██╔██╗ ██╔═══╝ ██║   ██║██╔══██╗   ██║   ╚════██║
███████╗██╔╝ ██╗██║     ╚██████╔╝██║  ██║   ██║   ███████║
╚══════╝╚═╝  ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝
*/

/**
 * @name fetchRandomPuzzle
 * @description - Controller method used to retrieve a random puzzle from the database.
 * @param {Object} req Request object
 * @param {Object} res Response object
 * --- AVAILABLE REQ.QUERY PARAMS ---
 * @property {String} difficulty (OPTIONAL) - difficulty of the puzzle to query
 *   Supported difficulties:
 *      easy
 *      medium
 *      hard
 * @property {Boolean} getSolutions (OPTIONAL) - If you would like the solutions information for the puzzle
 */
module.exports.fetchRandomPuzzle = (req, res) => {

  const { difficulty, getSolutions = false } = req.query;

  let processingFunction = getSolutions ?
    processQuerySuccessWithSolutions :
    processQuerySuccess;

  if (difficulty === undefined) {
    Puzzle.fetchAll()
      .then(puzzles => processingFunction(puzzles, res))
      .catch(error => processQueryFailure(error, res));
  } else {
    Puzzle.where({difficulty: difficulty.toLowerCase()}).fetchAll()
      .then(puzzles => processingFunction(puzzles, res))
      .catch(error => processQueryFailure(error, res));
  }
};
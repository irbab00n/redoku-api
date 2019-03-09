const express = require('express');

const { Puzzle } = require('../controllers');

const router = express.Router();
/* Route: /puzzle */
router.route('/random')
  .get(Puzzle.fetchRandomPuzzle);

module.exports = router;
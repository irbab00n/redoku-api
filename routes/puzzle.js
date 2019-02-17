const express = require('express');

const { Puzzle } = require('../controllers');

const router = express.Router();
/* Route: /puzzle */
router.route('/')
  .get(Puzzle.fetchPuzzle);

module.exports = router;
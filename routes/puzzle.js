const express = require('express');
const path = require('path');

const { Puzzle } = require('../controllers');

const router = express.Router();

router.route('/')
  .get(Puzzle.fetchPuzzle);

module.exports = router;
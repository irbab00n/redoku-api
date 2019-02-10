const express = require('express');
const path = require('path');

const { Solution } = require('../controllers');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.status(200).send('Successfully connected to the solutions route!');
  })

router.route('/create')
  .post(Solution.create);

module.exports = router;
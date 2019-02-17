const express = require('express');

const { Solution } = require('../controllers');

const router = express.Router();
/* Route: /solution */
router.route('/')
  .get((req, res) => {
    res.status(200).send('Successfully connected to the solutions route!');
  })

/* Route: /solution/create */
router.route('/create')
  .post(Solution.create);

module.exports = router;
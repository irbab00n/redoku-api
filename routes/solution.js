const express = require('express');
const path = require('path');

const { Solution } = require('../controllers/');

const router = express.Router();

router.route('/')
  .get();

module.exports = router;
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');

const routes = require('../routes');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

routes.forEach(({ route, router }) => {
  app.use(route, router);
});

app.get('/*', (req, res) => {
  res.status(200).send('Successfully connected to Redoku API');
});

module.exports = app;
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const routes = require('../routes/');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

routes.forEach(route => {
  app.use(route.route, route.controller);
});

app.get('/*', (req, res) => {
  console.log('A request has been made to the server');
  res.status(200).send('Successfully connected to Redoku API');
});

module.exports = app;
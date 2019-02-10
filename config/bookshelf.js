const DB_CONFIG = process.env.DB_CONFIG || 'local';

const config = require('../knexfile')[DB_CONFIG];
const knex = require('knex')(config);
const bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry');

module.exports = bookshelf;
const DB_CONFIG = process.env.DB_CONFIG || 'local';

const config = require('../knexfile')[DB_CONFIG]; 

// this is where we might have to assign the value differently when we deploy it to run production instead of development
const knex = require('knex')(config);
const bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry');

module.exports = bookshelf;
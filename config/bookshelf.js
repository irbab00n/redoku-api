const DB_CONFIG = process.env.DB_CONFIG || 'local';

const config = require('../knexfile')[DB_CONFIG];

console.log(`\n\n Chosen config: ${DB_CONFIG} produces: `, config);

const knex = require('knex')(config);
const bookshelf = require('bookshelf')(knex);

bookshelf.plugin('registry');

module.exports = bookshelf;
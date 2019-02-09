const bookshelf = require('../config/bookshelf');

const Solution = bookshelf.Model.extend({
  tableName: 'solutions'
});

module.exports = bookshelf.model('Solution', Solution);
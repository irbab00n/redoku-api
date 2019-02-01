
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.hasTable('puzzles').then(exists => {
      if (!exists) {
        return knex.schema.createTable('puzzles', table => {
          table.increments(),
          table.string('initial', 255),
          table.string('difficulty', 100)
        });
      }
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('puzzles')
  ]);
};

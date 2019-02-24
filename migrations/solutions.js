module.exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.hasTable('solutions').then(exists => {
      if (!exists) {
        return knex.schema.createTable('solutions', table => {
          table.increments(),
          table.integer('puzzle_id').references('id').inTable('puzzles'),
          table.string('solution', 255)
          table.string('time', 255)
        });
      }
    })
  ]);
};

module.exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable('solutions')
  ]);
};

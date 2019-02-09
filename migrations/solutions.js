module.exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.hasTable('solutions').then(exists => {
      if (!exists) {
        return knex.schema.createTable('solutions', table => {
          table.increments(),
          table.integer('puzzle_id').references('id').inTable('puzzles'),
          table.string('solution', 255)
          // Add in elapsedTime to track total time user spent on puzzle
          // Add in user_id field once user feature is added in
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

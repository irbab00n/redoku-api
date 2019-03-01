/**
 * @todo Update solutions seeder to include new 'time' property
 */

module.exports.seed = (knex, Promise) => {
  return knex('solutions').del()
    .then(() => {
      return knex('solutions').insert([
        // {id: 1, puzzle_id: 7, solution: '8,4,6,9,3,7,1,5,2,row3,1,9,6,2,5,8,4,7,row7,5,2,1,8,4,9,6,3,row2,8,5,7,1,3,6,9,4,row4,6,3,8,5,9,2,7,1,row9,7,1,2,4,6,3,8,5,row1,2,7,5,9,8,4,3,6,row6,3,8,4,7,1,5,2,9,row5,9,4,3,6,2,7,1,8,', time: '167.256'}
      ]);
    });
};
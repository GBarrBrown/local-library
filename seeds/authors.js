
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('authors').del()
    .then(function () {
      // Inserts seed entries
      return knex('authors').insert([
        {id: 1, authorId: 1, firstName: 'Kenneth', lastName: 'Grahame'},
        {id: 2, authorId: 2, firstName: 'Robert', lastName: 'Muchamore'},
        {id: 3, authorId: 3, firstName: 'Bryce', lastName: 'Courtenay'}
      ]);
    });
};


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('genres').del()
    .then(function () {
      // Inserts seed entries
      return knex('genres').insert([
        {id: 1, genreId: 1, genre: 'Childrens Novel'},
        {id: 2, genreId: 2, genre: 'Thriller'},
        {id: 3, genreId: 3, genre: 'Coming-of-age'}
      ]);
    });
};

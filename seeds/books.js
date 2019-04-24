
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {bookId: 1, title: 'The Wind in the Willows', authorId: 1, genreId: 1, yearPublished: 1908},
        {bookId: 2, title: 'CHERUB: The Recruit', authorId: 2, genreId: 2, yearPublished: 2004},
        {bookId: 3, title: 'The Power of One', authorId: 3, genreId: 3, yearPublished: 1989}
      ]);
    });
};

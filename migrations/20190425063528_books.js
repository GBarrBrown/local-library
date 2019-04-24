
exports.up = function(knex, Promise) {
    return knex.schema.createTable('books', table => {
        table.increments('bookId').primary()// eg 7
        table.string('title')               // eg Frankenstein's Monster
        table.integer('authorId')           // eg 12
        table.integer('genreId')            // eg 3 - horror
        table.integer('yearPublished')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('books')
};

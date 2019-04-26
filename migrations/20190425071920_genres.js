
exports.up = function(knex, Promise) {
    return knex.schema.createTable('genres', table => {
        table.increments('id').primary()
        table.integer('genreId')
        table.integer('genre')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('genres')
  
};

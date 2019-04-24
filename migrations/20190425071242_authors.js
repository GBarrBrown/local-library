
exports.up = function(knex, Promise) {
    return knex.schema.createTable('authors', table => {
        table.increments('id').primary()
        table.integer('authorId')
        table.string('firstName')
        table.string('lastName')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('authors')
};

const connection = require('./connection')

module.exports = {
    getAllBooks
}

function getAllBooks(testDb) {
    const db = testDb || connection

    return db('books')
}
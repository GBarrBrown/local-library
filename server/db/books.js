const connection = require("./connection");

module.exports = {
  getAllBooks,
  getBookById,
  getBooksByAuthorFirstName
};

function getAllBooks(testDb) {
  const db = testDb || connection;

  return db("books");
}

function getBookById(id, testDb) {
  const db = testDb || connection;
  return db("books")
    .where("bookId", id)
    .select();
}

function getBooksByAuthorFirstName(authorFirstName, testDb) {
  const db = testDb || connection;
  return db("authors")
    .join("books", "authors.authorId", "books.authorId")
    .where("authorFirstName", authorFirstName)
    .select("books.title");
}

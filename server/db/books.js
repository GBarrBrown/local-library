const connection = require("./connection");

module.exports = {
  getAllBooks,
  getBookByTitle,
  getBooksByAuthorFirstName
};

function getAllBooks(testDb) {
  const db = testDb || connection;

  return db("books");
}

function getBookByTitle(testDb, title) {
  const db = testDb || connection;
  return db("books")
    .where("title", title)
    .select();
}

function getBooksByAuthorFirstName(testDb, authorFirstName) {
  const db = testDb || connection;
  return db("authors")
    .join("books", "authors.authorId", "books.authorId")
    .where("authorFirstName", authorFirstName)
    .select("books.title");
}

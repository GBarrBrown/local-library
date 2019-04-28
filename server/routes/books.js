const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  getBookById,
  getBooksByAuthorFirstName
} = require("../db/books");

// GET /api/v1/books  - currently returns all books
router.get("/", (req, res) => {
  getAllBooks()
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Something went wrong" });
    });
});

// GET /api/v1/books/:id
router.get("/:id", (req, res) => {
  getBookById(req.params.id)
    .then(book => {
      res.json(book);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Something went wrong" });
    });
});

// POST /api/v1/books/:authorFirstName
router.post("/:authorFirstName", (req, res) => {
  getBooksByAuthorFirstName(req.body)
    .then(books => {
      res.json(books);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Something went wrong" });
    });
});

module.exports = router;

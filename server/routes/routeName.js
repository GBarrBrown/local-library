const express = require('express')
const router = express.Router()
const { getAllBooks } = require('../db/books')

// GET /api/v1/routeName  - currently returns all books
router.get('/', (req, res) => {
    getAllBooks()
    .then((response) => {
        res.json(response)
    })
    .catch((err) => {
        console.log(err)
        res.status(500).json({error: 'Something went wrong'})
    })
})

// GET /api/v1/routeName/:thing
router.get('/:thing', (req, res) => {

})

// POST /api/v1/routeName
router.post('/', (req, res) => {

})

module.exports = router
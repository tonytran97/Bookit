const router = require('express').Router();
const Book = require('../models/Book');

router.get('/', async (req, res) => {
    try {
    const bookData = await Book.findAll().catch((err) => {
        res.json(err);
    });
    const books = bookData.map((book) => book.get({ plain: true }));
    // console.log(books);
    res.render('homepage', { books });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
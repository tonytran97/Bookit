const router = require('express').Router();
const Book = require('../models/Book');

router.get('/', async (req, res) => {
    try {
    const bookData = await Book.findAll().catch((err) => {
        res.json(err);
    });
    const books = bookData.map((book) => book.get({ plain: true }));
    // console.log(books);
    res.render('homepage', { 
        books,
        loggedIn: req.session.loggedIn, 
    });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    if (req.session.loggedIn) {
        res.redirect(`/`);
        return;
    }
    res.render('login');
});

router.get('/signup', async (req, res) => {
    if (req.session.loggedIn){
        res.redirect(`/`);
        return;
    }
    res.render('signup');
});

router.get(`/newread`, (req, res) => {
    res.render(`newread`);
});

module.exports = router;
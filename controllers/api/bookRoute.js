const router = require(`express`).Router();
const { Book } = require('../../models');

// CREATE new book
router.post('/', async (req, res) => {
    try {
      const dbBookData = await Book.create({
        title: req.body.title,
        author: req.body.author,
        cover: req.body.cover,
        summary: req.body.summary,
      });
  console.log(dbBookData);
      req.session.save(() => {
        res.status(200).json(dbBookData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;
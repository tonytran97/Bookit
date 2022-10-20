const router = require(`express`).Router();
const { Review } = require('../../models');
const withAuth = require(`../../utils/auth`);

// CREATE new review
router.post('/', async (req, res) => {
    try {
      const dbReviewData = await Review.create({
        content: req.body.review,
        user_id: req.session.user_id,
        book_id: req.session.book_id,
      });
      req.session.save(() => {
        res.status(200).json(dbReviewData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;
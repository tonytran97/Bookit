const router = require(`express`).Router();

const userRoutes = require(`./userRoute`);
const bookRoutes = require('./bookRoute');
const newReviewRoute = require('./newReviewRoute');

router.use(`/users`,userRoutes);
router.use('/newread', bookRoutes);
router.use('/newreview', newReviewRoute);

module.exports = router;
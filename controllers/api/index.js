const router = require(`express`).Router();
const reviewRoutes = require(`./reviewRoute`);
const userRoutes = require(`./userRoute`);
const bookRoutes = require('./bookRoute');

router.use(`/review`, reviewRoutes);
router.use(`/users`,userRoutes);
router.use('/newread', bookRoutes);

module.exports = router;
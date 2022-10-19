const router = require(`express`).Router();

const userRoutes = require(`./userRoute`);
const bookRoutes = require('./bookRoute');


router.use(`/users`,userRoutes);
router.use('/newread', bookRoutes);

module.exports = router;
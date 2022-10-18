const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoute');
// const loginRoutes = require('./loginRoute');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/login', loginRoutes);

module.exports = router;
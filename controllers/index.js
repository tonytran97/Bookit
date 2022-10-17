const router = require('express').Router();

const apiRoutes = require('./api');
Database
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
=======
const homeRoutes = require('./homeRoute');
const loginRoutes = require('./loginRoute');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/login', loginRoutes);

module.exports = router;
 main

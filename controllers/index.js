const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoute');
const reviewRoutes = require('./reviewRoute');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/review', reviewRoutes);

module.exports = router;
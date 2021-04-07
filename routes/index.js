const router = require('express').Router();

const homepageRoutes = require('./homepageRoutes');
const apiRoutes = require('./api');

router.use('/', homepageRoutes);
router.use('/api', apiRoutes);

module.exports = router;

const router = require('express').Router();

const memberRoutes = require('./memberRoutes');
const trainerRoutes = require('./trainerRoutes');
const memberClassRoutes = require('./memberClassRoutes');
const tierRoutes = require('./tierRoutes');
const classRoutes = require('./trainerRoutes');


router.use('/member', memberRoutes);
router.use('/trainer', trainerRoutes);
router.use('/memberClass', memberClassRoutes);
router.use('/tier', tierRoutes);
router.use('/class', classRoutes);

module.exports = router;

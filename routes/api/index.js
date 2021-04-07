const router = require('express').Router();
const memberRoutes = require('./memberRoutes');
// const trainerRoutes = require('./trainerRoutes');

router.use('/member', memberRoutes);
// router.use('/employee', employeeRoutes);

module.exports = router;

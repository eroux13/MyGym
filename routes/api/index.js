const router = require('express').Router();
const memberRoutes = require('./memberRoutes');
const employeeRoutes = require('./employeeRoutes');

router.use('/member', memberRoutes);
router.use('/employee', employeeRoutes);

module.exports = router;

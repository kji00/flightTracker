const router = require('express').Router();

const userRoutes = require('./userRoutes');
const flightRoutes = require('./flightRoutes');

router.use('/users', userRoutes);
router.use('/flights', flightRoutes);

module.exports = router;
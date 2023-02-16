const router = require('express').Router();

const userRoutes = require('./userRoutes');
const flightRoutes = require('./flightRoutes');
const tripsRoutes = require('./tripsRoutes');

router.use('/trips', tripsRoutes);
router.use('/users', userRoutes);
router.use('/flights', flightRoutes);

module.exports = router;
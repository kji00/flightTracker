const router = require('express').Router();

const userRoutes = require('./userRoutes');
const flightRoutes = require('./flightRoutes');
const tripsRoutes = require('./tripsRoutes');
const timeRoutes = require('./timeForward');

router.use('/users', userRoutes);
router.use('/flights', flightRoutes);
router.use('/trips', tripsRoutes);
router.use('/time', timeRoutes);

module.exports = router;
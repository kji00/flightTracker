const router = require('express').Router();
const dayjs = require('dayjs');
const { User, Cities, Trips, Prices } = require('../../models');

// GET route for pricing for flight route
router.get('/', async (req, res) => {
    try {
        const frontget = req.body;

        // get back 5 random prices for leaveDate and 5 random prices for returnDate


        return res.json({message: 'request received'});
    }
    catch (err) {
        res.status(500).json(err);
    }
});


// PUT route to save updated trip info to user profile
// router.put();

module.exports = router;
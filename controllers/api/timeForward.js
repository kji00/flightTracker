// this route is only used to simulate checking prices in 3 days
// When the button on the front end is clicked new prices for the same trip will be created

const router = require('express').Router();
const datePrice = require('../../utils/dateAndPrice');

// GET route for updated pricing for flight route
router.get('/', async (req, res) => {
    try {

        const startDate = req.body.leaveDate;
        const endDate = req.body.returnDate;

        // send object back with updated departing and returning flight dates with pricing
        const datePriceData = datePrice(startDate, endDate);

        return res.json(datePriceData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
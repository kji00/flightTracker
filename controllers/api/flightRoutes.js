const router = require('express').Router();
const { Cities } = require('../../models');
const datePrice = require('../../utils/dateAndPrice');

// GET route for pricing for flight route
router.get('/', async (req, res) => {
    try {
        const qData = req.body;

        // check validity of route, if one of the cities doesn't exist add city to cities database
        const citiesStartCity = await Cities.findOrCreate({ where: {city: qData.startCity.toLowerCase()} });
        const citiesEndCity = await Cities.findOrCreate({ where: {city: qData.endCity.toLowerCase()} });

        const startDate = qData.leaveDate;
        const endDate = qData.returnDate;

        // send object back with departing and returning flight dates with pricing
        const datePriceData = datePrice(startDate, endDate);

        return res.json(datePriceData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
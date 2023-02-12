const router = require('express').Router();
const { User, Cities, Trips } = require('../../models');
const datePrice = require('../../utils/dateAndPrice');

// GET route for pricing for flight route
router.get('/', async (req, res) => {
    try {
        const qData = req.body;

        // check validity of route, if one of the cities doesn't exist add city to cities database
        const citiesStartCity = await Cities.findOrCreate({ where: {city: qData.startCity.toLowerCase()} });
        const citiesEndCity = await Cities.findOrCreate({ where: {city: qData.endCity.toLowerCase()} });

        const startDate = req.body.leaveDate;
        const endDate = req.body.returnDate;

        // send object back with departing and returning flight dates with pricing
        const datePriceData = datePrice(startDate, endDate);

        return res.json(datePriceData);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// POST route for creating new trips
router.post('/', async (req, res) => {
    const tripData = await Trips.create(req.body);

    return res.json(tripData);
});

// PUT route for updating trip info
// router.put('/', async (req, res) => {
//     try {

//     }
//     catch (err) {
//         res.status(500).json(err);
//     }
// })


module.exports = router;
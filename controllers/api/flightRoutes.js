const router = require('express').Router();
const dayjs = require('dayjs');
const { User, Cities, Trips } = require('../../models');

// GET route for pricing for flight route
router.get('/', async (req, res) => {
    try {
        const qData = req.body;

        // check validity of route, if one of the cities doesn't exist add city to cities database
        const citiesStartCity = await Cities.findOrCreate({ where: {city: qData.startCity.toLowerCase()} });
        const citiesEndCity = await Cities.findOrCreate({ where: {city: qData.endCity.toLowerCase()} });

        // send back prices for date range ex: if leaveDate is 05/10/2023 user gets back prices for date range 05/08/2023 - 05/12/2023

        return res.json({message: 'find or create'});
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// POST route for creating new trips
// router.post('/', async (req, res) => {
//     try {

//     }
//     catch (err) {
//         res.status(500).json(err);
//     }
// });

// PUT route for updating trip info
// router.put('/', async (req, res) => {
//     try {

//     }
//     catch (err) {
//         res.status(500).json(err);
//     }
// })


module.exports = router;
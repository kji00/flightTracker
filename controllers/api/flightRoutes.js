const router = require('express').Router();
const { User, Cities, Prices } = require('../../models');

// test get route for city
router.get('/:id', async (req, res) => {
    try {
        const citiesData = await Cities.findOne({ where: { city: req.params.id}});
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
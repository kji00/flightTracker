const router = require('express').Router();
const { User, Cities, Trips } = require('../../models');


// GET route for getting trip data via trip id
router.get('/:userid', async (req, res) => {
    try {
        const tripData = await Trips.findByPk(req.params.id);

        return res.json(tripData);
    }
    catch (err) {
        res.status(500).json(err)
    }
})

// POST route for creating new trips
router.post('/:userid', async (req, res) => {
    try {
        const tripData = await Trips.create(req.body);

        return res.json(tripData);
    }
    catch (err) {
        res.status(500).json(err)
    }
});

// PUT route for updating trip info
router.put('/:userid', async (req, res) => {
    try {
        const tripData = await Trips.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        const tripDataUpdate = await Trips.findByPk(req.params.id)
        
        return res.json(tripDataUpdate);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
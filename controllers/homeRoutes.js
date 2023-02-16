const router = require('express').Router();
const { Trips, User } = require('../models')

// GET route for logged in user information
router.get('/home', async (req, res) => {
    try {
        const userData = await User.findAll({
            where: {
                email: req.body.email
            },
            attributes: { exclude: ['password'] },
            include: [{ model: Trips }],
        });

        console.log(userData);

        return res.json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
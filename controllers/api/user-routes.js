const router = require('express').Router();
const { User } = require('../../models');

// Create a new user route
router.post('/', async (req, res) => {
    try {
        // required fields username, email and password
        const dbUserData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Login route for existing users
router.post('/login', async (req, res) => {
    try {
        // find user based off of email address
        const dbUserData = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        // if return value is false
        if (!dbUserData) {
            res.status(400).json({ message: 'User does not exist, please create an account' });
            return;
        }

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password' });
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;
            res.status(200).json({ user: dbUserData, message: 'Login Success' });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Logout of session
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;
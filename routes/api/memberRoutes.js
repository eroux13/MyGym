const router = require('express').Router();
const { Member } = require('../models');

router.get('/', async (req, res) => {
    // find all members
    try {
        const memberData = await Member.findAll({
            // include: [{ model: Product }],
        });
        res.status(200).json(memberData);
    } catch (err) {
        res.status(500).json(err);
    }
    // be sure to include its associated Products

});

router.get('/:id', async (req, res) => {
    // find one member by their `id` value
    try {
        const memberData = await Category.findByPk(req.params.id, {
            //include: [{ model: Product }],
        });

        if (!memberData) {
            res.status(404).json({ message: 'No member found with that id!' });
            return;
        }

        res.status(200).json(memberData);
    } catch (err) {
        res.status(500).json(err);
    }
    // be sure to include its associated Products
});

router.post('/login', async (req, res) => {
    try {
        // Find the user who matches the posted e-mail address
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        // Verify the posted password with the password store in the database
        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        // Create session variables based on the logged in user
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        // Remove the session variables
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;

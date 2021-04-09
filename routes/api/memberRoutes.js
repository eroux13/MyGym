const router = require('express').Router();
const { Member, Tier } = require('../../models/associations.js');

//Route: /api/member
router.get('/', async (req, res) => {
    // find all members
    try {
        const memberData = await Member.findAll({
            include: [{ model: Tier }],
        });
        res.status(200).json(memberData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    // be sure to include its associated Products

});

router.get('/:id', async (req, res) => {
    // find one member by their `id` value
    try {
        const memberData = await Member.findByPk(req.params.id, {
            include: [{ model: Tier }],
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

router.post('/:id', async (req, res) => {
    // update a category by its `id` value
    try {
        console.log("tier id: " + req.body.newTier);
        console.log("id: " + req.params.id)
        const membershipData = await Member.update({
            tier_id: req.body.newTier,
        },
            {
                where: {
                    id: req.params.id
                }
            }
        );
        res.redirect('/member-dashboard')
        res.status(200).json(membershipData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    // delete a category by its `id` value
    try {
        const membershipData = await Member.destroy(
            {
                where:
                {
                    id: req.params.id,
                },
            }
        );
        res.status(200).json(membershipData);
    } catch (err) {
        res.status(400).json(err);
    }
});

//Routes for reading and storing password

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

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
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;

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
        const memberData = await Member.findByPk(req.params.id, {
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

router.put('/:id', async (req, res) => {
    // update a category by its `id` value
    try {
        const membershipData = await Member.update({
            membership_type: req.body.membership_type,
        },
            {
                where: {
                    id: req.params.id
                }
            }
        );
        res.status(200).json(membershipData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
    try {
        const membershipData = await Member.destroy({
            membership_type: req.body.membership_type,
        },
            {
                where: {
                    id: req.params.id
                }
            }
        );
        res.status(200).json(membershipData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;

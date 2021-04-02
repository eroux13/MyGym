const router = require('express').Router();
const { Trainer, Class } = require('../models');

router.get('/', async (req, res) => {
    // find all trainers
    try {
        const trainerData = await Trainer.findAll({
            // be sure to include its associated Classes
            include: [{ model: Class }],
        });
        res.status(200).json(trainerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    // find one trainer by their `id` value
    try {
        const trainerData = await Trainer.findByPk(req.params.id, {
            // be sure to include its associated Classes
            include: [{ model: Class }],
        });

        if (!trainerData) {
            res.status(404).json({ message: 'No trainer found with that id!' });
            return;
        }

        res.status(200).json(trainerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    // create a new trainer
    try {
        const trainerData = await Trainer.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
        });
        res.status(200).json(trainerData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
    // update a Trainer by their `id` value
    try {
        const trainerUpdateData = await Trainer.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
        },
            {
                where: {
                    id: req.params.id
                }
            }
        );
        res.status(200).json(trainerUpdateData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', (req, res) => {
    // delete a trainer by their `id` value
    try {
        const trainerdata = await Trainer.destroy({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
        },
            {
                where: {
                    id: req.params.id
                }
            }
        );
        res.status(200).json(trainerdata);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;

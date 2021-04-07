const router = require('express').Router();
const { request } = require('express');
const { Trainer, Class } = require('../../models/associations.js');

router.get('/', async (req, res) => {
    // find all classes
    try {
        const classData = await Class.findAll({
            // be sure to include its associated Trainers
            include: [{ model: Trainer }],
        });
        res.status(200).json(classData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    // find one class by their `id` value
    try {
        const classData = await Class.findByPk(req.params.id, {
            // be sure to include its associated Trainers
            include: [{ model: Trainer }],
        });

        if (!classData) {
            res.status(404).json({ message: 'No classes found with that id!' });
            return;
        }

        res.status(200).json(classData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

const { Class } = require('../models');

const classData = [
  {
    name: 'Yoga',
    trainer_id: '1'
  },
  {
    name: 'Spin',
    trainer_id: '2'
  },
  {
    name: 'Zumba',
    trainer_id: '3'
  },
  {
    name: 'Kickboxing',
    trainer_id: '4'
  },
  {
    name: 'Abs',
    trainer_id: '2'
  },
  {
    name: 'Lifting',
    trainer_id: '4'
  },
];

const seedClasses = () => Class.bulkCreate(classData);

module.exports = seedClasses;

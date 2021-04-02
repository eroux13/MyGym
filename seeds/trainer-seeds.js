const Trainer = require('../models/trainer.js');

const trainerData = [
  {
    first_name: 'Arthur',
    last_name: 'Leung'
  },
  {
    first_name: 'Maria',
    last_name: 'Lara'
  },
  {
    first_name: 'EJ',
    last_name: 'Roux'
  },
  {
    first_name: 'Billy',
    last_name: 'Keating'
  },
];

const seedTrainers = () => Trainer.bulkCreate(trainerData);

module.exports = seedTrainers;

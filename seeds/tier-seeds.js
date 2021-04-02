const Tier = require('../models/tier.js');

const tierData = [
  {
    tier_name: 'Silver',
  },
  {
    tier_name: 'Gold',
  },
  {
    tier_name: 'Platinum',
  }
];

const seedTiers = () => Tier.bulkCreate(tierData);

module.exports = seedTiers;

const { Tier } = require('../models');

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

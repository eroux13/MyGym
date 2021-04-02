const { Member } = require('../models');

const memberData = [
  {
    first_name: 'Charlie',
    last_name: 'Day',
    tier_id: '1'
  },
  {
    first_name: 'Dennis',
    last_name: 'Reynolds',
    tier_id: '2'
  },
  {
    first_name: 'Dee',
    last_name: 'Reynolds',
    tier_id: '2'
  },
  {
    first_name: 'Mac',
    last_name: 'McDonald',
    tier_id: '3'
  },
  {
    first_name: 'Matthew',
    last_name: 'Mara',
    tier_id: '1'
  }
];

const seedMembers = () => Member.bulkCreate(memberData);

module.exports = seedMembers;
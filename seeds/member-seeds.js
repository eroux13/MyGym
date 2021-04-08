const Member = require('../models/member.js');

const memberData = [
  {
    first_name: 'Charlie',
    last_name: 'Day',
    tier_id: '1',
    email: 'Charlie@gmail.com',
    password: 'password'
  },
  {
    first_name: 'Dennis',
    last_name: 'Reynolds',
    tier_id: '2',
    email: 'Dennis@gmail.com',
    password: 'password'
  },
  {
    first_name: 'Dee',
    last_name: 'Reynolds',
    tier_id: '2',
    email: 'Dee@gmail.com',
    password: 'password'
  },
  {
    first_name: 'Mac',
    last_name: 'McDonald',
    tier_id: '3',
    email: 'Mac@gmail.com',
    password: 'password'
  },
  {
    first_name: 'Matthew',
    last_name: 'Mara',
    tier_id: '1',
    email: 'Matthew@gmail.com',
    password: 'password'
  }
];

const seedMembers = () => Member.bulkCreate(memberData);

module.exports = seedMembers;
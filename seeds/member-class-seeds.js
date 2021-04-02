const MemberClass = require('../models/memberClass.js');

const memberClassData = [
  {
    member_id: 1,
    class_id: 6,
  },
  {
    member_id: 1,
    class_id: 3,
  },
  {
    member_id: 2,
    class_id: 1,
  },
  {
    member_id: 2,
    class_id: 2,
  },
  {
    member_id: 3,
    class_id: 3,
  },
  {
    member_id: 3,
    class_id: 4,
  },
  {
    member_id: 3,
    class_id: 5,
  },
  {
    member_id: 4,
    class_id: 6,
  },
  {
    member_id: 5,
    class_id: 6,
  }
];

const seedProductTags = () => MemberClass.bulkCreate(memberClassData);

module.exports = seedProductTags;

// Imported models

const Class = require('./class.js');
const Member = require('./member.js');
const Tier = require('./tier.js');
const Trainer = require('./trainer.js');
const MemberClass = require('./memberClass.js');

// Classes belong to a trainer

Class.belongsTo(Trainer, {
    foreignKey: 'trainer_id',
});

// Trainers have many classes

Trainer.hasMany(Class, {
    foreignKey: 'trainer_id',
    onDelete: 'CASCADE',
})

// Members have many classes

Member.belongsToMany(Class, {
    through: 'member_class',
    hooks: true
});

// Classes have many members

Class.belongsToMany(Member, {
    through: 'member_class',
    hooks: true
});

// Tiers have many members

Tier.hasMany(Member, {
    foreignKey: 'tier_id',
})

// Members have one tier    

Member.belongsTo(Tier, {
    foreignKey: 'tier_id',
    hooks: true
})

module.exports = { Class, Member, Tier, Trainer, MemberClass };
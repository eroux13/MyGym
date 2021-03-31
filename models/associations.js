// Imported models

const Class = require('./class.js');
const Member = require('./member.js');
const Tier = require('./trainer.js');
const Trainer = require('./trainer.js');

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
    through: 'MemberClass'
});

// Classes have many members

Class.belongsToMany(Member, {
    through: 'MemberClass'
});

// Members have one tier

Member.belongsTo(Tier, {
    foreignKey: 'tier_id'
})

// Tiers have many members

Tier.hasMany(Member, {
    foreignKey: 'tier_id',
    onDelete: 'CASCADE'
})
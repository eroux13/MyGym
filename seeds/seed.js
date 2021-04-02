const seedMembers = require('./member-seeds');
const seedTrainers = require('./trainer-seeds');
const seedTiers = require('./tier-seeds');
const seedClasses = require('./class-seeds');
const seedMemberClass = require('./member-class-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedMembers();
    console.log('\n----- MEMBERS SEEDED -----\n');
  
    await seedTrainers();
    console.log('\n----- TRAIENRS SEEDED -----\n');
  
    await seedTiers();
    console.log('\n----- TIERS SEEDED -----\n');
  
    await seedClasses();
    console.log('\n----- CLASSES SEEDED -----\n');

    await seedMemberClass();
    console.log('\n----- MEMBER CLASSES SEEDED -----\n');
  
    process.exit(0);
};
  
  seedAll();
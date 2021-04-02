const seedMembers = require('./member-seeds.js');
const seedTrainers = require('./trainer-seeds.js');
const seedTiers = require('./tier-seeds.js');
const seedClasses = require('./class-seeds.js');
const seedMemberClass = require('./member-class-seeds.js');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedTiers().catch(e => {
        console.log("Error: " + e.message);
    });
    console.log('\n----- TIERS SEEDED -----\n');

    await seedMembers().catch(e => {
        console.log("Error: " + e.message);
    });
    console.log('\n----- MEMBERS SEEDED -----\n');
  
    await seedTrainers().catch(e => {
        console.log("Error: " + e.message);
    });
    console.log('\n----- TRAIENRS SEEDED -----\n');
  
    await seedClasses().catch(e => {
        console.log("Error: " + e.message);
    });
    console.log('\n----- CLASSES SEEDED -----\n');

    await seedMemberClass().catch(e => {
        console.log("Error: " + e.message);
    });
    console.log('\n----- MEMBER CLASSES SEEDED -----\n');
  
    process.exit(0);
};
  
seedAll();
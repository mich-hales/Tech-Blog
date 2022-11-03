const postSeeds = require('./post-seeds');
const userSeeds = require('./user-seeds');
const commentSeeds = require('./comment-seeds');
const sequelize = require('../config/connection');

const seedIt = async () => {
    await sequelize.sync({ force: true });

    await userSeeds();
    await postSeeds();
    await commentSeeds();

    process.exit(0);
};

seedIt();
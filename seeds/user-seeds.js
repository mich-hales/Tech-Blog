const { User } = require('../models');

const userData = [
    {
        name: 'Matthew',
        email: 'mattbrinkley@gmail.com',
        password: 'mattRocks123',
    },
    {
        name: 'Jessie',
        email: 'jessie_b99@gmail.com',
        password: 'jessRocks123',
    },
    {
        name: 'Spencer',
        email: 'spence-diego@gmail.com',
        password: 'spenceRocks123',
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
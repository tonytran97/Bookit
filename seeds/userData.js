const { User } = require('../models');

// dummy data
const userData = [
    {username: 'UserOne', password: 'password1'},
    {username: 'UserTwo', password: 'password2'},
    {username: 'UserThree', password: 'password3'},
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true
});

module.exports = seedUsers;
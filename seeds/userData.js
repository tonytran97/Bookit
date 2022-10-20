const { User } = require('../models');

// dummy data
const userData = [
    {id: 1, username: 'TheBookWorm', password: 'password1'},
    {id: 2, username: 'ThatBookSmell', password: 'password2'},
    {id: 3, username: 'BoundbyBooks', password: 'password3'},
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true
});

module.exports = seedUsers;
const { User } = require('../models');

// dummy data
const userData = [
    {username: 'UserOne', email:'userOne@gmail.com', password: 'password1'},
    {username: 'UserTwo', email:'userTwo@gmail.com', password: 'password2'},
    {username: 'UserThree', email:'userThree@gmail.com', password: 'password3'},
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true
});

module.exports = seedUsers;
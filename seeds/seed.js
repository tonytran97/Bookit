const sequelize = require('../config/connection');
const { User, Book, Review } = require('../model');

const seedUsers = require('./userData');
const seedBlogs = require('./bookData');
const seedComments = require('./reviewData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedBlogs(); 
  await seedComments();

  process.exit(0);
};

seedAll();
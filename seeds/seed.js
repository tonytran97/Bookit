const sequelize = require('../config/connection');
Database
 Updated upstream
const { User, Book, Review } = require('../model');

const userData = require('./userData');
const bookData = require('./bookData');
const reviewData = require('./reviewData');

const { User } = require('../models');

const userData = require('./userData.json');
 Stashed changes


const seedUsers = require('./userData');
const seedBlogs = require('./bookData');
const seedReviews = require('./reviewData');
 main

const seedAll = async () => {
  await sequelize.sync({ force: true });

 Database
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
 Updated upstream
  await Review.bulkCreate(reviewData);

  await Book.bulkCreate(bookData);
=======
 Stashed changes

  await seedUsers();
  await seedBlogs(); 
  await seedReviews();
 main

  process.exit(0);
};

 Database
 Updated upstream
seedDatabase();
=======
seedDatabase();
 Stashed changes
=======
seedAll();
 main

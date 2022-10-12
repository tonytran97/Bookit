const sequelize = require('../config/connection');
const { User, Book, Review } = require('../model');

const userData = require('./userData');
const bookData = require('./bookData');
const reviewData = require('./reviewData');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  await Review.bulkCreate(reviewData);

  await Book.bulkCreate(bookData);

  process.exit(0);
};

seedDatabase();
const sequelize = require('../config/connection');
const { User, Book, Review } = require('../model');

const userData = require('./userData.json');
const bookData = require('./bookData.json');
const reviewData = require('./reviewData.json');

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
const sequelize = require('../config/connection');
<<<<<<< Updated upstream
const { User, Book, Review } = require('../model');

const userData = require('./userData');
const bookData = require('./bookData');
const reviewData = require('./reviewData');
=======
const { User } = require('../models');

const userData = require('./userData.json');
>>>>>>> Stashed changes

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
<<<<<<< Updated upstream
  await Review.bulkCreate(reviewData);

  await Book.bulkCreate(bookData);
=======
>>>>>>> Stashed changes

  process.exit(0);
};

<<<<<<< Updated upstream
seedDatabase();
=======
seedDatabase();
>>>>>>> Stashed changes

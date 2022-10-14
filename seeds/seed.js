const sequelize = require('../config/connection');

const seedUsers = require('./userData');
const seedBlogs = require('./bookData');
const seedReviews = require('./reviewData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();
  await seedBlogs(); 
  await seedReviews();

  process.exit(0);
};

seedAll();
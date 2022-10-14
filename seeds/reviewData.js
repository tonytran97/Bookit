const { Review } = require('../models');

// dummy data
const reviewData = [
    {content:'dummy content 1'},
    {content:'dummy content 2'},
    {content:'dummy content 3'},
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;
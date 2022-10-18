const { Review } = require('../models');

// dummy data
const reviewData = [
   {
      date_posted: '01/12/22',
      content: 'This is my great review',
      user_id: 3,
   },
   {
      date_posted: '05/23/22',
      content: 'Love your thinking',
      user_id: 2,
   },
   {
      date_posted: '11/04/22',
      content: 'Great review',
      user_id: 6,
   },
];

// {content:'dummy content 1'},
//     {content:'dummy content 2'},
//     {content:'dummy content 3'},

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;
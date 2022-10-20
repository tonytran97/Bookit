const { Review } = require('../models');

// dummy data
const reviewData = [
   {content:'This book smells good', user_id: 1, book_id: 1},
   {content:'Tastes good, 10/10 recommend', user_id: 1, book_id: 1},
   {content:'Deep book, I almost drowned', user_id: 1, book_id: 1},
   {content:'Good book to sharpen your mind, also got a papercut', user_id: 2, book_id: 2},
   {content:'This book sucks', user_id: 2, book_id: 2},
];


   // {
   //    date_posted: '01/12/22',
   //    content: 'This is my great review',
   //    user_id: 3,
   // },
   // {
   //    date_posted: '05/23/22',
   //    content: 'Love your thinking',
   //    user_id: 2,
   // },
   // {
   //    date_posted: '11/04/22',
   //    content: 'Great review',
   //    user_id: 6,
   // },


const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;
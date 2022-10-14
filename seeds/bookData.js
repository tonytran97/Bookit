const { Book } = require('../models');

// dummy data
const bookData = [
    {title: 'It Starts with Us: A Novel', author:'Colleen Hoover', cover: '', summary: 'Test Summary'},
    {title: 'Lore Olympus: Volume Three (B&N Exclusive Edition)', author:'Rachel Smythe', cover: '', summary: 'Test Summary'},
    {title: 'Sell Yourself: How to Create, Live, and Sell a Powerful Personal Brand', author:'Cindy McGovern', cover: '', summary: `Test Summary`},
];

const seedBooks = () => Book.bulkCreate(bookData);

module.exports = seedBooks;
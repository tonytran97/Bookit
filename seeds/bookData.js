const { Book } = require('../models');

// dummy data
const bookData = [
    {title: 'It Starts with Us: A Novel', author:'Colleen Hoover', cover: 'http://prodimage.images-bn.com/pimages/9781668001226_p0_v3_s1200x630.jpg', summary: 'Test Summary'},
    {title: 'Lore Olympus: Volume Three (B&N Exclusive Edition)', author:'Rachel Smythe', cover: 'https://m.media-amazon.com/images/I/51O9uX1wE6L._AC_SY780_.jpg', summary: 'Test Summary'},
    {title: 'Sell Yourself: How to Create, Live, and Sell a Powerful Personal Brand', author:'Cindy McGovern', cover: 'https://m.media-amazon.com/images/I/41x7g1Zz+vL._AC_SY780_.jpg', summary: `Test Summary`},
];

const seedBooks = () => Book.bulkCreate(bookData);

module.exports = seedBooks;
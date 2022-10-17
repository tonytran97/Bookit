const { Book } = require('../models');

// dummy data
const bookData = [
    {title: 'It Starts with Us: A Novel', author:'Colleen Hoover', cover: 'http://prodimage.images-bn.com/pimages/9781668001226_p0_v3_s1200x630.jpg', summary: 'Lily and her ex-husband, Ryle, have just settled into a civil coparenting rhythm when she suddenly bumps into her first love, Atlas, again. After nearly two years separated, she is elated that for once, time is on their side, and she immediately says yes when Atlas asks her on a date.'},
    {title: 'Lore Olympus: Volume Three', author:'Rachel Smythe', cover: 'https://m.media-amazon.com/images/I/51O9uX1wE6L._AC_SY780_.jpg', summary: 'Persephone was ready to start a new life when she left the mortal realm for Olympus. However, she quickly discovered the dark side of her glamorous new home—from the relatively minor gossip threatening her reputation to a realm-shattering violation...'},
    {title: 'Sell Yourself: How to Create, Live, and Sell a Powerful Personal Brand', author:'Cindy McGovern', cover: 'https://m.media-amazon.com/images/I/41x7g1Zz+vL._AC_SY780_.jpg', summary: `No matter what your role or title is at work, selling is an important part of what you do―whether you're selling a product, an idea, or a new way of doing things. But, before you can sell any of those things you have to sell yourself. Creating your own personal brand―and promoting it in...`},
];

const seedBooks = () => Book.bulkCreate(bookData);

module.exports = seedBooks;
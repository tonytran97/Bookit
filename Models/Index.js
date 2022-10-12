const User = require('./Users');
const Review = require('./Review');
const Book = require('./Book');

User.hasMany(Review, {
    foreignKey:  'user_id',
    onDelete: 'CASCADE'
});

Review.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Book, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Book.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Review, Book }
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        date_posted: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {
            //     len: [3]
            // }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user', 
                key: 'id',
            },
        },
        // username: {
        //     type: DataTypes.STRING, 
        //     references: {
        //         model: 'user', 
        //         key: 'username',
        //     },
        // },
        book_id: {
            type: DataTypes.INTEGER, 
            references: {
                model: 'book', 
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'review'
    }
);

module.exports = Review;

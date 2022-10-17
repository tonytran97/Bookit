 Database
const { Model, DataTypes } = require('sequelize');
=======
const {Model, DataTypes} = require('sequelize');
main
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
 Database
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ISBN: {
      type: DataTypes.STRING,
    },
    VOTES: {
      type: DataTypes.INTEGERm
    }
      },

{
          sequelize,
          timestamps: false,
          freezeTableName: true,
          underscored: true,
          modelName: 'book',
    },
);


module.exports = Book;

    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cover: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'https://us.123rf.com/450wm/yehorlisnyi/yehorlisnyi2104/yehorlisnyi210400016/167492439-no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-comin.jpg?ver=6',
        },
        summary: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [500]
            }
        },
        // rating: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'book'
    }
);

module.exports = Book;
// title
// author
// rating
// id
// isbn number??
 main

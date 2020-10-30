'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    CategoryID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    CategoryName: DataTypes.STRING,
    Description: DataTypes.STRING,
    Tag: DataTypes.STRING,
    Picture: DataTypes.STRING,
    Active: DataTypes.TINYINT(1),
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
  };
  return Category;
};
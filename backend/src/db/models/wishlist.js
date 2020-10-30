'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wishlist = sequelize.define('Wishlist', {
    WishlistID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    CustomerID: DataTypes.INTEGER,
    ProductID: DataTypes.INTEGER
  }, {});
  Wishlist.associate = function(models) {
    // associations can be defined here
  };
  return Wishlist;
};
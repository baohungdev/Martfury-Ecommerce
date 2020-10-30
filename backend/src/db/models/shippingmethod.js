'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShippingMethod = sequelize.define('ShippingMethod', {
    ShippingMethodID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    ShippingName: DataTypes.STRING(255),
    ShippingPrice: DataTypes.INTEGER,
  }, {});
  ShippingMethod.associate = function(models) {
    // associations can be defined here
  };
  return ShippingMethod;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShippingInfo = sequelize.define('ShippingInfo', {
    ShippingInfoID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    CustomerID: DataTypes.INTEGER,
    ShippingMethodID: DataTypes.INTEGER,
    email: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    address: DataTypes.STRING(255),
    apartment: DataTypes.STRING(255),
    city: DataTypes.STRING,
    postalcode: DataTypes.STRING,
    emailnotify: DataTypes.TINYINT(1),
    savefornext: DataTypes.TINYINT(1),
    shipperID: DataTypes.INTEGER,
  }, {});
  ShippingInfo.associate = function(models) {
    // associations can be defined here
  };
  return ShippingInfo;
};
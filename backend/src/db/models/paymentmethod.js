'use strict';
module.exports = (sequelize, DataTypes) => {
  const PaymentMethod = sequelize.define('PaymentMethod', {
    PaymentMethodID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    CustomerID: DataTypes.INTEGER,
    ShippingInfoID: DataTypes.INTEGER,
    PaymentMethod: DataTypes.INTEGER,
    CardNumber: DataTypes.STRING(100),
  }, {});
  PaymentMethod.associate = function(models) {
    // associations can be defined here
  };
  return PaymentMethod;
};
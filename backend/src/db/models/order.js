'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    OrderID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    CustomerID: DataTypes.INTEGER,
    ShippingInfoID: DataTypes.INTEGER,
    OrderNumber: DataTypes.INTEGER,
    OrderDate: DataTypes.DATE,
    ShipDate: DataTypes.DATE,
    RequiredDate: DataTypes.DATE,
    ShipperID: DataTypes.INTEGER,
    Freight: DataTypes.STRING,
    Timestamp: DataTypes.DATE,
    TransactStatus: DataTypes.STRING,
    ErrMsg: DataTypes.STRING,
    Fulfilled: DataTypes.TINYINT(1),
    Deleted: DataTypes.TINYINT(1),
    Paid: DataTypes.TINYINT(1),
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};


'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderDetail = sequelize.define('OrderDetail', {
    OrderDetailID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    OrderID: DataTypes.INTEGER,
    ProductID: DataTypes.INTEGER,
    OrderNumber: DataTypes.STRING,
    Price: DataTypes.INTEGER,
    Quantity: DataTypes.INTEGER,
    Discount: DataTypes.INTEGER,
    Total: DataTypes.INTEGER,
    IDSKU: DataTypes.INTEGER,
    Size: DataTypes.STRING,
    Color: DataTypes.STRING,
    Fulfilled: DataTypes.TINYINT(1),
    ShipDate: DataTypes.STRING,
    BillDate: DataTypes.DATE
  }, {});
  OrderDetail.associate = function(models) {
    // associations can be defined here
  };
  return OrderDetail;
};
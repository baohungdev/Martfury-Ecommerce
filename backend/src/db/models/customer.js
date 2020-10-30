'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    CustomerID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Email: DataTypes.STRING,
    Birth: DataTypes.STRING,
    Gender: DataTypes.STRING,
    Phone: DataTypes.INTEGER,
    Password: DataTypes.STRING,
    ShipAddress: DataTypes.STRING,
    ShipCity: DataTypes.STRING,
    ShipPostalCode: DataTypes.STRING,
    ShipCountry: DataTypes.STRING,
    Address1: DataTypes.STRING,
    Address2: DataTypes.STRING,
    City: DataTypes.STRING,
    Country: DataTypes.STRING,
    BillingAddress: DataTypes.STRING,
    BillingCity: DataTypes.STRING,
    BillingPostalCode: DataTypes.STRING,
    CreditCard: DataTypes.INTEGER,
    CreditCardTypeID: DataTypes.INTEGER,
    CardExpMo: DataTypes.INTEGER,
    CardExpYr: DataTypes.INTEGER
  }, {});
  Customer.associate = function(models) {
    // associations can be defined here
  };
  return Customer;
};
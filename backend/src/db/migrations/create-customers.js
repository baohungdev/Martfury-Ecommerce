'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Customers', {
      CustomerID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      FirstName: {
        allowNull: false,
        defaultValue: '',
        type: Sequelize.STRING
      },
      LastName: {
        allowNull: false,
        defaultValue: '',
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      Birth: {
        type: Sequelize.STRING
      },
      Gender: {
        type: Sequelize.STRING
      },
      Phone: {
        type: Sequelize.INTEGER
      },
      Password: {
        type: Sequelize.STRING
      },
      ShipAddress: {
        type: Sequelize.STRING
      },
      ShipCity: {
        type: Sequelize.STRING
      },
      ShipPostalCode: {
        type: Sequelize.STRING
      },
      ShipCountry: {
        type: Sequelize.STRING
      },
      Address1: {
        type: Sequelize.STRING
      },
      Address2: {
        type: Sequelize.STRING
      },
      City: {
        type: Sequelize.STRING
      },
      Country: {
        type: Sequelize.STRING
      },
      BillingAddress: {
        type: Sequelize.STRING
      },
      BillingCity: {
        type: Sequelize.STRING
      },
      BillingPostalCode: {
        type: Sequelize.STRING
      },
      CreditCard: {
        type: Sequelize.INTEGER
      },
      CreditCardTypeID: {
        type: Sequelize.INTEGER
      },
      CardExpMo: {
        type: Sequelize.INTEGER
      },
      CardExpYr: {
        type: Sequelize.INTEGER
      },
      createdAt: {
          allowNull: false,
          type: Sequelize.DATE
      },
      updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Customers');
  }
};
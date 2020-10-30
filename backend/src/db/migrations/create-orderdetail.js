'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orderdetails', {
      OrderDetailID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      OrderID: {
        type: Sequelize.INTEGER
      },
      ProductID: {
        type: Sequelize.INTEGER
      },
      OrderNumber: {
        type: Sequelize.INTEGER
      },
      Price: {
        type: Sequelize.STRING
      },
      Quantity: {
        type: Sequelize.INTEGER
      },
      Discount: {
        type: Sequelize.STRING
      },
      Total: {
        type: Sequelize.STRING
      },
      IDSKU: {
        type: Sequelize.INTEGER
      },
      Size: {
        type: Sequelize.STRING
      },
      Color: {
        type: Sequelize.STRING
      },
      Fulfilled: {
        type: Sequelize.TINYINT(1)
      },
      ShipDate: {
        type: Sequelize.DATE
      },
      BillDate: {
        type: Sequelize.DATE
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
    return queryInterface.dropTable('Orderdetails');
  }
};
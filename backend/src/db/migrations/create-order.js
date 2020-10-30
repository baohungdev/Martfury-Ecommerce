'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Orders', {
      OrderID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CustomerID: {
        type: Sequelize.INTEGER
      },
      ShippingInfoID: {
        type: Sequelize.INTEGER
      },
      OrderNumber: {
        type: Sequelize.STRING
      },
      OrderDate: {
        type: Sequelize.DATE
      },
      ShipDate: {
        type: Sequelize.DATE
      },
      RequiredDate: {
        type: Sequelize.DATE
      },
      ShipperID: {
        type: Sequelize.INTEGER
      },
      Freight: {
        type: Sequelize.STRING
      },
      Timestamp: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
      TransactStatus: {
        type: Sequelize.STRING
      },
      ErrMsg: {
        type: Sequelize.STRING
      },
      Fulfilled: {
        type: Sequelize.TINYINT(1)
      },
      Deleted: {
        type: Sequelize.TINYINT(1)
      },
      Paid: {
        type: Sequelize.TINYINT(1)
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
    return queryInterface.dropTable('Orders');
  }
};
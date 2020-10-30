'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ShippingInfos', {
      ShippingInfoID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CustomerID: {
        type: Sequelize.INTEGER
      },
      ShippingMethodID: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      firstname: {
        type: Sequelize.STRING,
      },
      lastname: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING(255),
      },
      apartment: {
        type: Sequelize.STRING(255),
      },
      city: {
        type: Sequelize.STRING,
      },
      postalcode: {
        type: Sequelize.STRING,
      },
      emailnotify: {
        type: Sequelize.TINYINT(1),
      },
      savefornext: {
        type: Sequelize.TINYINT(1),
      },
      shipperID: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('ShippingInfos');
  }
};
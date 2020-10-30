'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Categories', {
      CategoryID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CategoryName: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.STRING
      },
      Tag: {
        type: Sequelize.STRING
      },
      Picture: {
        type: Sequelize.STRING
      },
      Active: {
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
    return queryInterface.dropTable('Categories');
  }
};
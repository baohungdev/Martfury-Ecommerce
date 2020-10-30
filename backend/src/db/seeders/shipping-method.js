'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        
        return queryInterface.bulkInsert('ShippingMethods', [{
            ShippingName: 'International',
            ShippingPrice: 30,
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('ShippingMethods', null, {});
    }
};

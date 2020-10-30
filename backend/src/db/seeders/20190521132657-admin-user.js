'use strict';
const bcrypt = require("bcryptjs");
const config = require("../../config");

module.exports = {
    up: (queryInterface, Sequelize) => {
        let hash = bcrypt.hashSync(config.admin_pass, config.bcrypt.saltRounds);

        return queryInterface.bulkInsert('Users', [{
            email: 'admin@flatlogic.com',
            password: hash,
            name: 'admin',
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};

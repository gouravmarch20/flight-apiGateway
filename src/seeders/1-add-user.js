'use strict';

const bcrypt = require('bcrypt');
const { ServerConfig } = require('../config');

module.exports = {
    async up(queryInterface, Sequelize) {
        const saltRounds = +ServerConfig.SALT_ROUNDS || 10;

        await queryInterface.bulkInsert('Users', [
            {
                email: 'user1@example.com',
                password: bcrypt.hashSync('password123', saltRounds),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                email: 'user2@example.com',
                password: bcrypt.hashSync('securepass456', saltRounds),
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Users', {
            email: ['user1@example.com', 'user2@example.com']
        }, {});
    }
};
 
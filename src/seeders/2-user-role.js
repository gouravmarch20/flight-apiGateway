'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        // Example data assuming:
        // userId 1 = user1@example.com
        // userId 2 = user2@example.com
        // roleId 1 = Admin
        // roleId 2 = Regular

        await queryInterface.bulkInsert('User_Roles', [
            {
                userId: 6,
                roleId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },

        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('User_Roles', null, {});
    }
};

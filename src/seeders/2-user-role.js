'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('UserRoles', [
            {
                id: 1,
                userId: 4,
                roleId: 1,
                createdAt: new Date('2025-10-02 11:22:14'),
                updatedAt: new Date('2025-10-02 11:22:14')
            },
            {
                id: 2,
                userId: 6,
                roleId: 2,
                createdAt: new Date('2025-10-02 11:42:33'),
                updatedAt: new Date('2025-10-02 11:42:33')
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('UserRoles', null, {});
    }
};

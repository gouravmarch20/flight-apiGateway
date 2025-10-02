'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Users', [
            {
                id: 1,
                email: 'newUser2@gamil.com',
                password: '$2b$08$imWzBJ4QAD5K.h2cZK3G4ehJV0FKv/zFFBhPqJ/m9Qg3Fzz63oCdG',
                createdAt: new Date('2025-10-02 07:31:45'),
                updatedAt: new Date('2025-10-02 07:31:45')
            },
            {
                id: 3,
                email: 'newUser1@gamil.com',
                password: '$2b$08$L2Tgf0QJbdPOBfn7L0w3beYATDPTvCQLZcfL39fnFcF3hdeYmtJka',
                createdAt: new Date('2025-10-02 07:34:19'),
                updatedAt: new Date('2025-10-02 07:34:19')
            },

        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Users', null, {});
    }
};
'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Users', [
            {
                id: 1,
                email: 'newUser2@gamil.com',
                password: '$2b$08$imWzBJ4QAD5K.h2cZK3G4ehJV0FKv/zFFBhPqJ/m9Qg3Fzz63oCdG',
                createdAt: new Date('2025-10-02 07:31:45'),
                updatedAt: new Date('2025-10-02 07:31:45')
            },
            {
                id: 3,
                email: 'newUser1@gamil.com',
                password: '$2b$08$L2Tgf0QJbdPOBfn7L0w3beYATDPTvCQLZcfL39fnFcF3hdeYmtJka',
                createdAt: new Date('2025-10-02 07:34:19'),
                updatedAt: new Date('2025-10-02 07:34:19')
            },
            {
                id: 4,
                email: 'gourav321@gamil.com',
                password: '$2b$08$bfSa/4tjGtaFzJnXN3vPsepXq/GGPH4K1Ij24RAV0f5TWZzt4s.PO',
                createdAt: new Date('2025-10-02 11:22:14'),
                updatedAt: new Date('2025-10-02 11:22:14')
            },
            {
                id: 6,
                email: 'gouravm2@gamil.com',
                password: '$2b$08$FntUDQVQha.Irejeomlhbe8Tnk3yqjdJHSpCjFiuJNPFbUJi6jo.G',
                createdAt: new Date('2025-10-02 11:42:33'),
                updatedAt: new Date('2025-10-02 11:42:33')
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Users', null, {});
    }
};

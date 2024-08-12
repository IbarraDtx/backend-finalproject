module.exports = {
    up: async (QueryInterface, Sequelize) => {
        await QueryInterface.bulkInsert('reservation', [
            {
                userId: 1,
                rentedSpaceId: 1,
                startDate: new Date(),
                endDate: new Date(),
                totalPrice: 234,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('reservation', null, {});
    },
};

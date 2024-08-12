module.exports = {
    up: async (QueryInterface, Sequelize) => {
        await QueryInterface.bulkInsert('review', [
            {
                reservationId: 1,
                rating: 4,
                comment: 'Comment for review on Reservation 1',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },
};

module.exports = {
    up: async (QueryInterface, Sequelize) => {
        await QueryInterface.bulkInsert(
            'roomType',
            [
                {
                    name: 'Individual',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Two Beds',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Master Bed',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },
    down: async (QueryInterface, Sequelize) => {
        await QueryInterface.bulkDelete('roomType', null, {});
    },
};

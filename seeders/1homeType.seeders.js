module.exports = {
    up: async (QueryInterface, Sequelize) => {
        await QueryInterface.bulkInsert(
            'homeType',
            [
                {
                    name: 'Apartment',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'House',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Chalet',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'RuralHouse',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    name: 'Shared',
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
            ],
            {}
        );
    },
    down: async (QueryInterface, Sequelize) => {
        await QueryInterface.bulkDelete('homeType', null, {});
    },
};

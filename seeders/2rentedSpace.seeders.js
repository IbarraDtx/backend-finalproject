module.exports = {
    up: async (QueryInterface, Sequelize) => {
        await QueryInterface.bulkInsert('rentedSpace', [
            {
                userId: 11,
                homeTypeId: 1,
                roomTypeId: 1,
                mediaId: 1,
                title: 'Test Rented Space',
                maxPersons: 3,
                numBedrooms: 2,
                numBathrooms: 2,
                description: 'This is a description for Test Rented Space',
                address: 'This is the address for Test Rented Space',
                tv: true,
                kitchen: false,
                airconditioner: false,
                heating: false,
                internet: false,
                price: 234,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },
};

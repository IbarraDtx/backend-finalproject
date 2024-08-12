module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('reservation', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'user',
                    key: 'id',
                },
                allowNull: false,
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            rentedSpaceId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'rentedSpace',
                    key: 'id',
                },
                allowNull: false,
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            startDate: {
                type: Sequelize.DATE,
                allowNull: false,
                unique: true,
            },
            endDate: {
                type: Sequelize.DATE,
                allowNull: false,
                unique: true,
            },
            price: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
                field: 'totalPrice',
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('reservation');
    },
};

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('review', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            reservationId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'reservation',
                    key: 'id',
                },
                allowNull: false,
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            rating: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
                field: 'rating',
            },
            comment: {
                type: Sequelize.STRING,
                minLenght: 20,
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
        await queryInterface.dropTable('review');
    },
};

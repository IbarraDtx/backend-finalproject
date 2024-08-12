module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('media', {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            img1: {
                type: Sequelize.BLOB('medium'),
                allowNull: false,
            },
            img2: {
                type: Sequelize.BLOB('medium'),
                allowNull: false,
            },
            img3: {
                type: Sequelize.BLOB('medium'),
                allowNull: false,
            },
            img4: Sequelize.BLOB('medium'),
            img5: Sequelize.BLOB('medium'),
            img6: Sequelize.BLOB('medium'),
            img7: Sequelize.BLOB('medium'),
            img8: Sequelize.BLOB('medium'),
            img9: Sequelize.BLOB('medium'),
            img10: Sequelize.BLOB('medium'),
            img11: Sequelize.BLOB('medium'),
            img12: Sequelize.BLOB('medium'),
            img13: Sequelize.BLOB('medium'),
            img14: Sequelize.BLOB('medium'),
            img15: Sequelize.BLOB('medium'),
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
        await queryInterface.dropTable('media');
    },
};

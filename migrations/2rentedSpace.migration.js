module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('rentedSpace', {
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
            homeTypeId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'homeType',
                    key: 'id',
                },
                allowNull: false,
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            roomTypeId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'roomType',
                    key: 'id',
                },
                allowNull: false,
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            mediaId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'media',
                    key: 'id',
                },
                allowNull: false,
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false,
                minLength: 10,
                maxLength: 50,
            },
            maxPersons: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            numBedrooms: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            numBathrooms: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: false,
                minLength: 100,
                maxLength: 2000,
            },
            address: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            tv: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            kitchen: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            airconditioner: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            heating: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            internet: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            price: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
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
        await queryInterface.dropTable('rentedSpace');
    },
};

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('user', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
                requre: true,
                allowNull: false,
                minLength: 2,
                maxLength: 20,
            },
            surname: {
                type: Sequelize.STRING,
                require: true,
                allowNull: false,
                minLength: 2,
                maxLength: 40,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                minLength: 11,
                maxLength: 50,
                unique: true,
            },
            age: {
                type: Sequelize.DATE,
                require: true,
                allowNull: false,
            },
            phoneNumber: {
                type: Sequelize.STRING,
                allowNull: false,
                minLength: 9,
                maxLength: 15,
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
                minLength: 8,
                maxLength: 30,
            },
            isAdmin: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            isOwner: {
                type: Sequelize.BOOLEAN,
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
        await queryInterface.dropTable('user');
    },
};

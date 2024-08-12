const { Model } = require('sequelize');
const RentedSpaceModel = require('./rentedSpace.model');

module.exports = (sequelize, DataTypes) => {
    class HomeType extends Model {
        static associate(models) {
            this.belongsToMany(models.rentedSpace, {
                through: 'RentedSpace_HomeType',
            });
        }
    }

    HomeType.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'homeType',
            tableName: 'homeType',
        }
    );
    return HomeType;
};

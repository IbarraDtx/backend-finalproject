const { Model } = require('sequelize');
const RentedSpaceModel = require('./rentedSpace.model');

module.exports = (sequelize, DataTypes) => {
    class RoomType extends Model {
        static associate(models) {
            this.belongsToMany(models.rentedSpace, {
                through: 'RentedSpace_RoomType',
            });
        }
    }
    RoomType.init(
        {
            name: {
                type: DataTypes.STRING,
                unique: true,
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
            modelName: 'roomType',
            tableName: 'roomType',
        }
    );
    return RoomType;
};

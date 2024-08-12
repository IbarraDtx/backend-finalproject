const { Model } = require('sequelize');
const UserModel = require('./user.model');
const RentedSpaceModel = require('./rentedSpace.model');

module.exports = (sequelize, DataTypes) => {
    class Reservation extends Model {
        static associate(models) {
            this.belongsTo(models.user, {
                foreignKey: 'userId',
            });
            this.belongsTo(models.rentedSpace, {
                foreignKey: 'rentedSpaceId',
            });
            this.hasOne(models.review, {
                foreignKey: 'reservationId',
            });
        }
    }
    Reservation.init(
        {
            userId: {
                type: DataTypes.INTEGER,
                references: {
                    model: UserModel,
                    key: 'id',
                },
                allowNull: false,
            },
            rentedSpaceId: {
                type: DataTypes.INTEGER,
                references: {
                    model: RentedSpaceModel,
                    key: 'id',
                },
                allowNull: false,
            },
            startDate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            endDate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            price: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false,
                field: 'totalPrice',
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
            modelName: 'reservation',
            tableName: 'reservation',
        }
    );
    return Reservation;
};

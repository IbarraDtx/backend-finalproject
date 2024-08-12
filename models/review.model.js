const { Model } = require('sequelize');
const ReservationModel = require('./reservation.model');

module.exports = (sequelize, DataTypes) => {
    class Review extends Model {
        static associate(models) {
            this.belongsTo(models.reservation, {
                foreignKey: 'reservationId',
            });
        }
    }

    Review.init(
        {
            reservationId: {
                type: DataTypes.INTEGER,
                references: {
                    model: ReservationModel,
                    key: 'id',
                },
                allowNull: false,
            },
            rating: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false,
                field: 'Rating',
            },
            comment: {
                type: DataTypes.STRING,
                minLength: 20,
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
            modelName: 'review',
            tableName: 'review',
        }
    );
    return Review;
};

const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Trips extends Model {}

// leaveDateAndPrices and returnDateAndPrices will store an array of objects and each object will have a specific date and specific price

Trips.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        startCity: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        endCity: {
            type: DataTypes.STRING,
            allowNull: false
        },
        leaveDate: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        returnDate: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        leaveDateAndPrices: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        returnDateAndPrices: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'trips',
    }
);

module.exports = Trips;
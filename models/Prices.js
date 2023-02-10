const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Prices extends Model {}

Prices.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        prices: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'prices',
    }
);

module.exports = Prices;
const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Trips extends Model {}

// leaveDatePrices and returnDatePrices will store an array of objects and each object will have a specific date and specific price
// ex: leaveDatePrice: [
//                       { day1 : { date: 05/08/2023, price: 568 }},
//                       { day2 : { date: 05/09/2023, price: 420 }},
//                       { day3 : { date: 05/10/2023, price: 128 }},
//                       { day4 : { date: 05/11/2023, price: 361 }},
//                       { day5 : { date: 05/12/2023, price: 99 }} ]
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
        leaveDatePrices: {
            type: Sequelize.JSON,
            allowNull: false,
        },
        returnDatePrices: {
            type: Sequelize.JSON,
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
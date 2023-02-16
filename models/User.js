const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            },
        },
    },
    {
        hooks: {
            async beforeCreate(newUserData) {
                // use bcrypt to hash new user password
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            beforeCreate: async (newUserData) => {
                // Take user's email address, and making all letters lower case before adding it to the database. This is for good housekeeping.
                newUserData.email = await newUserData.email.toLowerCase();
                return newUserData;
            },
            // This is the same as creating but for updating a user accounts emails address. Make all letters lower case before adding it to the database. This is for good housekeeping.
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.email = await updatedUserData.email.toLowerCase();
                return updatedUserData;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;
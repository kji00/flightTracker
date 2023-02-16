const Cities = require('./Cities');
const User = require('./User');
const Trips = require('./Trips');

// Each trip is associated with a user account
User.hasOne(Trips, {
    foreignKey: 'user_id',
    // When we delete a User, make sure to also delete all the associated Trips.
    onDelete: 'CASCADE',
});

// Trips foreign key belongsTo user_id
Trips.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { Cities, Trips, User };
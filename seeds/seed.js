const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./users.json');
const pricesData = require('./prices.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  process.exit(0);
};

seedDatabase();

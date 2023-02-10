const sequelize = require('../config/connection');
const Cities = require('../models/Cities');
const Prices = require('../models/Prices');
const User = require('../models/User');

const cityData = require('./cities.json');
const pricesData = require('./prices.json');
const userData = require('./users.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // create city table
  await Cities.bulkCreate(cityData);

  // create prices table
  await Prices.bulkCreate(pricesData);

  // user table
  await User.bulkCreate(userData);

  process.exit(0);
};

seedDatabase();

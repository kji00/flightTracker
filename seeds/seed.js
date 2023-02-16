const sequelize = require('../config/connection');
const Cities = require('../models/Cities');

const cityData = require('./cities.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // create city table
  await Cities.bulkCreate(cityData);

  process.exit(0);
};

seedDatabase();

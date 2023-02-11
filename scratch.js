const dayjs = require('dayjs');
const { User, Cities, Trips } = require('./models');
const random = require('./utils/random');

const qData = {
	startCity: "San Francisco",
	endCity: "New York",
	leaveDate: "05/10/2023",
	returnDate: "05/21/2023"
};

console.log(random(100, 600))

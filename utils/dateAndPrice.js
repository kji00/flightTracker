const dateRange = require('./dateRange');
const price = require('./prices');

// gets date range for departing and returning dates as well as random prices for each
const datePrice = (startDate, endDate) => {
    const dateAndPrice = [];
    
    const departRange = dateRange(startDate);
    const returnRange = dateRange(endDate);
    
    const departRangePrices = price;
    const returnRangePrices = price;

    const departData = datePriceObj(departRange, departRangePrices);
    const returnData = datePriceObj(returnRange, returnRangePrices);

    dateAndPrice.push(departData, returnData);

    // returns data obj with 'date: price' key/value pairing 
    function datePriceObj(dateRange, priceRange) {
        const dataObj = {};
    
        dateRange.forEach((element, index) => {
            dataObj[element] = priceRange[index];
        });
    
        return dataObj;
    };

    return dateAndPrice;
};

module.exports = datePrice;

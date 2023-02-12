// this helper function returns an array of 5 dates. The range is -2 days from the original date and +2 days from the original day

const dayjs = require('dayjs');

const dateRange = (date) => {
    const startDateRange = [];

    for(let i = 0; i < 5; i++){
    if(i === 0){
        const subTwo = dayjs(date).subtract(2, 'day').format('MM/DD/YYYY').toString();
        startDateRange.push(subTwo);
    } if(i === 1){
        const subOne = dayjs(date).subtract(1, 'day').format('MM/DD/YYYY').toString();
        startDateRange.push(subOne);
    } if(i === 2){
        startDateRange.push(date);
    } if(i === 3){
        const addOne = dayjs(date).add(1, 'day').format('MM/DD/YYYY').toString();
        startDateRange.push(addOne);
    } if(i === 4){
        const addTwo = dayjs(date).add(2, 'day').format('MM/DD/YYYY').toString();
        startDateRange.push(addTwo);
    };
    }
    
    return startDateRange;
};

module.exports = dateRange;

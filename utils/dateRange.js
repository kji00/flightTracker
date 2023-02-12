// this helper function gets back a range of dates
const dayjs = require('dayjs');

const startRange = (leaveDate) => {
    const startDateRange = [];

    for(let i = 0; i < 5; i++){
    if(i === 0){
        const subTwo = dayjs(leaveDate).subtract(2, 'day').format('MM/DD/YYYY').toString();
        startDateRange.push(subTwo);
    } if(i === 1){
        const subOne = dayjs(leaveDate).subtract(1, 'day').format('MM/DD/YYYY').toString();
        startDateRange.push(subOne);
    } if(i === 2){
        startDateRange.push(leaveDate);
    } if(i === 3){
        const addOne = dayjs(leaveDate).add(1, 'day').format('MM/DD/YYYY').toString();
        startDateRange.push(addOne);
    } if(i === 4){
        const addTwo = dayjs(leaveDate).add(2, 'day').format('MM/DD/YYYY').toString();
        startDateRange.push(addTwo);
    };
    }
    
    return startDateRange;
};

const endRange = (returnDate) => {
    const endDateRange = [];

    for(let i = 0; i < 5; i++){
    if(i === 0){
        const subTwo = dayjs(returnDate).subtract(2, 'day').format('MM/DD/YYYY').toString();
        endDateRange.push(subTwo);
    } if(i === 1){
        const subOne = dayjs(returnDate).subtract(1, 'day').format('MM/DD/YYYY').toString();
        endDateRange.push(subOne);
    } if(i === 2){
        endDateRange.push(returnDate);
    } if(i === 3){
        const addOne = dayjs(returnDate).add(1, 'day').format('MM/DD/YYYY').toString();
        endDateRange.push(addOne);
    } if(i === 4){
        const addTwo = dayjs(returnDate).add(2, 'day').format('MM/DD/YYYY').toString();
        endDateRange.push(addTwo);
    };
    }

    return endDateRange;
};

module.exports = { startRange, endRange };

// test case scenarios
// console.log(startRange('05/01/2023'));

// console.log(endRange('05/31/2023'));
// Generate random prices and return it as an array
const prices = () => {
    const priceArr = [];
    
    for(let i = 0; i < 5; i++){
        priceArr.push(Math.floor(Math.random() * (600 - 150) + 150))
    };

    return priceArr;
}

module.exports = prices();

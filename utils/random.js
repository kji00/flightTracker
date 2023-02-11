// Function to generate random number
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

module.exports = randomNumber;
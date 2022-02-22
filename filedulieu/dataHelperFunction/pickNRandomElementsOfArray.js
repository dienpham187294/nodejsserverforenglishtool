const shuffleArr = require("./shuffleArr");
function pickNRandomElementsOfArray(arrInput, n) {
    return shuffleArr(arrInput).slice(0, n);
}

module.exports = pickNRandomElementsOfArray 
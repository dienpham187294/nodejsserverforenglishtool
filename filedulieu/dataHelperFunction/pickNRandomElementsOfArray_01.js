const shuffleArr = require("./shuffleArr");
function pickNRandomElementsOfArray(arrInput, n) {

    let output = shuffleArr(arrInput)
    return [
        output.slice(0, n),
        output
    ];
}

module.exports = pickNRandomElementsOfArray 
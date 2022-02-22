function convertArrToObjSource(input) {
    let objOutput = {}

    input.forEach((e, i) => {
        if (i % 2 === 0) {
            objOutput["M" + i + SortStringToKeys(e[0]).slice(0, 6)] = e
        }
        else {
            objOutput["N" + i + SortStringToKeys(e[0]).slice(0, 6)] = e
        }
    });


    return JSON.stringify(objOutput)
}

function SortStringToKeys(input) {
    return input.split(" ").join("").split(".").join("").split("!").join("").split("?").join("").split(",").join("")
}

module.exports = convertArrToObjSource
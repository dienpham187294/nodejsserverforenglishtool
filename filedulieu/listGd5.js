// const fs = require('file-system');

const data = require("../database/Gd5.json")

let ArrOutput = [].concat(data)

ArrOutput.forEach((e, i) => {
    e.id = i + 1
})
module.exports = ArrOutput
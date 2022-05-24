// const fs = require('file-system');

const data = require("../database/Gd3a.json")

let ArrOutput = [].concat(data)

ArrOutput.forEach((e, i) => {
    e.id = i + 1
})
module.exports = ArrOutput
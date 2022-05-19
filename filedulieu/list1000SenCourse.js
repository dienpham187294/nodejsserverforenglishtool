// const fs = require('file-system');

const data = require("../database/Main1000SenCreate.json")

let ArrOutput = [].concat(data)

ArrOutput.forEach((e, i) => {
    e.id += i
})
module.exports = ArrOutput
// const fs = require('file-system');

const data = require("../database/MainPronunciationCreate.json")

let ArrOutput = [].concat(data)

ArrOutput.forEach((e, i) => {
    e.id += i
})
module.exports = ArrOutput

const DataSpeack = require("../../database/Data_Speak.json")
let ArrOutput =[]
   .concat(DataSpeack)
ArrOutput.forEach((e, i) => {
    e.id = i + 1
})

module.exports = ArrOutput
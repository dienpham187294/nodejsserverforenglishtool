
const shuffleArr = require("../dataHelperFunction/shuffleArr")
const AmainTem = require("./T_TEMPLATE_01/AmainTem")
const DAT = require("./DLFIX01/DL_EASY_00")

let InAmainTem = AmainTem(DAT)

let coerdataoflession = [].concat(
    InAmainTem.core,
)
let DataTable = []


const Bai1
    = [
        {
            "nameoflession": "B.3.2_01",
            "story": "",
            "dataTool": DataTable,
            "status": "",
        },
        {
            "coerdataoflession": shuffleArr(shuffleArr(coerdataoflession))
        }
    ]
module.exports = Bai1




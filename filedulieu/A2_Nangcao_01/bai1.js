
const shuffleArr = require("../dataHelperFunction/shuffleArr")
const A1_20Job = require("./DulieuInside/Amain_01")
const D_Move = require("./A/Z_deparments")
let InA1_20Job = A1_20Job()
let coerdataoflession = [].concat(
    InA1_20Job.core,
)

let DataTable = [
]

const Bai5
    = [
        {
            "nameoflession": "01 _ Office Staff",
            "srcYoutube": "",
            "storyBoicanh": "Nhà hàng",
            "story": "",
            "move": [
                {
                    index: [480, 267, 552, 297],
                    data: D_Move
                }
            ],
            "dataTool": DataTable,
            "hoctap": {
                "listenRead": [],
                "listenOnly": [],
                "writeOnly": []
            },
            "status": "",
        },
        {
            "coerdataoflession": shuffleArr(shuffleArr(shuffleArr(coerdataoflession)))
        }
    ]
module.exports = Bai5




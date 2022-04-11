
const shuffleArr = require("../dataHelperFunction/shuffleArr")
const AmainTem = require("./T_TEMPLATE_01/AmainTem")
const Data = require("./DLFIX01/DL_EASY_01")
const D_Move = require("./A/Z_deparments")
let InAmainTem = AmainTem(Data)
let coerdataoflession = [].concat(
    InAmainTem.core,
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




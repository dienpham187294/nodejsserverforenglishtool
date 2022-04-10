
// import shuffleArr from "../dataHelperFunction/shuffleArr"
const D_Move = require("./A/Z_deparments")
const A2_Togo = require("./DulieuInside/A2_Togo")
const A2_EatHere = require("./DulieuInside/A2_EatHere")


const shuffleArr = require("../dataHelperFunction/shuffleArr")

let InA2_Togo = A2_Togo(10)
let InA2_EatHere = A2_EatHere(10)




let coerdataoflession = [].concat(
    InA2_Togo.core,
    InA2_EatHere.core,

)

let DataTable = [
    InA2_Togo.tool.m01
]


const Bai1
    = [
        {
            "nameoflession": "B.3.2",
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
            "coerdataoflession": shuffleArr(shuffleArr(coerdataoflession))
        }
    ]
module.exports = Bai1




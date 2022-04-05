
const shuffleArr = require("../dataHelperFunction/shuffleArr")
const A2_Togo_SUB = require("./DulieuInside/A2_Togo")
const A2_EatHere_SUB = require("./DulieuInside/A2_EatHere")
const A2_OrderAtTable = require("./DulieuInside/A2_OrderAtTable")
const A2_Menu = require("./DulieuInside/A2_Menu")
const A2_Tool = require("./DulieuInside/A2_Tool")
const A2_BabyChair = require("./DulieuInside/A2_BabyChair")
const A2_Toilet = require("./DulieuInside/A2_Toilet")


let InA2_Togo_SUB = A2_Togo_SUB(30)
let InA2_EatHere_SUB = A2_EatHere_SUB(30)
let InA2_OrderAtTable = A2_OrderAtTable(10)
let InA2_Menu = A2_Menu(10)
let InA2_Tool = A2_Tool(10)
let InA2_BabyChair = A2_BabyChair(10)
let InA2_Toilet = A2_Toilet(10)



let coerdataoflession = [].concat(
    // InA2_Togo_SUB.core,
    InA2_EatHere_SUB.core,
    // InA2_OrderAtTable.core,
    // InA2_Menu.core,
    // InA2_Tool.core,
    // InA2_BabyChair.core,
    // InA2_Toilet.core
)
let DataTable = [
    InA2_Togo_SUB.tool.m01.concat(
        InA2_EatHere_SUB.tool.m01,
        InA2_Togo_SUB.tool.m02,
        InA2_Togo_SUB.tool.m03,
        InA2_Menu.tool.m01,
        InA2_BabyChair.tool.m01,
        InA2_Toilet.tool.m01
    )
]


const Bai11
    = [
        {
            "nameoflession": "B.3.2_01",
            "srcYoutube": "https://www.youtube.com/embed/iwMeFAzv-po",
            "storyBoicanh": "Nhà hàng",
            "story": "",
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
module.exports = Bai11




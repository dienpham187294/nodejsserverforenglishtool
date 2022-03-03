const shuffleArr = require("../dataHelperFunction/shuffleArr")
const A2_Togo = require("./DulieuInside/A2_Togo")
const A2_EatHere = require("./DulieuInside/A2_EatHere")
const A2_OrderAtTable = require("./DulieuInside/A2_OrderAtTable")
const A2_Menu = require("./DulieuInside/A2_Menu")
const A2_Tool = require("./DulieuInside/A2_Tool")
const A2_BabyChair = require("./DulieuInside/A2_BabyChair")
const A2_Toilet = require("./DulieuInside/A2_Toilet")
const A3_Recommends = require("./DulieuInside/A3_Recommends")
const A3_Recommends1 = require("./DulieuInside/A3_Recommends1")
const A3_RecommendsAndQs = require("./DulieuInside/A3_RecommendsAndQs")
const A3_RecommendsAndQs1 = require("./DulieuInside/A3_RecommendsAndQs1")
const A3_Recommends1AndOrderDrinks = require("./DulieuInside/A3_Recommends1AndOrderDrinks")

let InA2_Togo = A2_Togo(2)
let InA2_EatHere = A2_EatHere(2)
let InA2_OrderAtTable = A2_OrderAtTable(2)
let InA2_Menu = A2_Menu(5)
let InA2_Tool = A2_Tool(5)
let InA2_BabyChair = A2_BabyChair(5)
let InA2_Toilet = A2_Toilet(5)
let InA3_Recommends = A3_Recommends(10)
let InA3_Recommends1 = A3_Recommends1(10)
let InA3_RecommendsAndQs = A3_RecommendsAndQs(10)
let InA3_RecommendsAndQs1 = A3_RecommendsAndQs1(10)
let InA3_Recommends1AndOrderDrinks = A3_Recommends1AndOrderDrinks(40)

let coerdataoflession = [].concat(
    // InA2_Togo.core,
    // InA2_EatHere.core,
    // InA2_OrderAtTable.core,
    // InA2_Menu.core,
    // InA2_Tool.core,
    // InA2_BabyChair.core,
    // InA2_Toilet.core,
    // InA3_Recommends.core,
    // InA3_Recommends1.core,
    // InA3_RecommendsAndQs.core,
    // InA3_RecommendsAndQs1.core,
    InA3_Recommends1AndOrderDrinks.core

)

let DataTable = [
    InA2_Togo.tool.m01.concat(
        InA2_EatHere.tool.m01,
        InA2_Togo.tool.m02,
        InA2_Togo.tool.m03,
        InA2_Menu.tool.m01,
        InA2_BabyChair.tool.m01,
        InA2_Toilet.tool.m01
    )
]

const Bai25
    = [
        {
            "nameoflession": "B.3.3_05",
            "srcYoutube": "",
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
module.exports = Bai25




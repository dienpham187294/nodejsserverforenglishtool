
const shuffleArr = require("../dataHelperFunction/shuffleArr")
const A2_Greeting = require("./DulieuInside/A2_Greeting")
// const A2_Togo = require("./DulieuInside/A2_Togo")
// const A2_EatHere = require("./DulieuInside/A2_EatHere")
// const A2_OrderAtTable = require("./DulieuInside/A2_OrderAtTable")
// const A2_Menu = require("./DulieuInside/A2_Menu")
// const A2_Tool = require("./DulieuInside/A2_Tool")
// const A2_BabyChair = require("./DulieuInside/A2_BabyChair")
// const A2_Toilet = require("./DulieuInside/A2_Toilet")



let InA2_Greeting = A2_Greeting(30)

// let InA2_Togo = A2_Togo(30)
// let InA2_EatHere = A2_EatHere(30)
// let InA2_OrderAtTable = A2_OrderAtTable(10)
// let InA2_Menu = A2_Menu(10)
// let InA2_Tool = A2_Tool(10)
// let InA2_BabyChair = A2_BabyChair(10)
// let InA2_Toilet = A2_Toilet(10)



let coerdataoflession = [].concat(
    InA2_Greeting.core
    // InA2_Togo.core,
    // InA2_EatHere.core,
    // InA2_OrderAtTable.core,
    // InA2_Menu.core,
    // InA2_Tool.core,
    // InA2_BabyChair.core,
    // InA2_Toilet.core
)
let DataTable = [

    InA2_Greeting.tool.m01

    // InA2_Togo.tool.m01.concat(
    //     InA2_EatHere.tool.m01,
    //     InA2_Togo.tool.m02,
    //     InA2_Togo.tool.m03,
    //     InA2_Menu.tool.m01,
    //     InA2_BabyChair.tool.m01,
    //     InA2_Toilet.tool.m01
    // )
]


const Bai11
    = [
        {
            "nameoflession": "B.3.2_01",
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
module.exports = Bai11




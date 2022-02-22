
const shuffleArr = require("../dataHelperFunction/shuffleArr")

// const A2_Togo =require( "./DulieuInside/A2_Togo")
// const A2_EatHere =require( "./DulieuInside/A2_EatHere")
// const A2_OrderAtTable =require( "./DulieuInside/A2_OrderAtTable")
// const A2_Menu =require( "./DulieuInside/A2_Menu")
// const A2_Tool =require( "./DulieuInside/A2_Tool")
// const A2_BabyChair =require( "./DulieuInside/A2_BabyChair")
// const A2_Toilet =require( "./DulieuInside/A2_Toilet")
// const A3_Recommends =require( "./DulieuInside/A3_Recommends")
// const A3_Recommends1 =require( "./DulieuInside/A3_Recommends1")
// const A3_RecommendsAndQs =require( "./DulieuInside/A3_RecommendsAndQs")
// const A3_RecommendsAndQs1 =require( "./DulieuInside/A3_RecommendsAndQs1")
// const A3_Recommends1AndOrderDrinks =require( "./DulieuInside/A3_Recommends1AndOrderDrinks")
// const A4_PickOrder_01 =require( "./DulieuInside/A4_PickOrder_01")
// const A4_PickOrder_02 =require( "./DulieuInside/A4_PickOrder_02")
// const A4_PickOrder_03 =require( "./DulieuInside/A4_PickOrder_03")
// const A4_PickOrder_04 =require( "./DulieuInside/A4_PickOrder_04")
const A5_TakeingReservation_01 = require("./DulieuInside/A5_TakeingReservation_01")
const A5_TakeingReservation_02 = require("./DulieuInside/A5_TakeingReservation_02")
const A5_TakeingReservation_03 = require("./DulieuInside/A5_TakeingReservation_03")
const A5_TakeingReservation_04 = require("./DulieuInside/A5_TakeingReservation_04")
const A5_TakeingReservation_05 = require("./DulieuInside/A5_TakeingReservation_05")
// let InA2_Togo = A2_Togo(5)
// let InA2_EatHere = A2_EatHere(5)
// // let InA2_OrderAtTable = A2_OrderAtTable(5)
// let InA2_Menu = A2_Menu(5)
// // let InA2_Tool = A2_Tool(5)
// let InA2_BabyChair = A2_BabyChair(5)
// let InA2_Toilet = A2_Toilet(5)
// let InA3_Recommends = A3_Recommends(10)
// let InA3_Recommends1 = A3_Recommends1(10)
// let InA3_RecommendsAndQs = A3_RecommendsAndQs(10)
// let InA3_RecommendsAndQs1 = A3_RecommendsAndQs1(10)
//  let InA3_Recommends1AndOrderDrinks = A3_Recommends1AndOrderDrinks(10)
// let InA4_PickOrder_01 = A4_PickOrder_01(30)
// let InA4_PickOrder_02 = A4_PickOrder_02(30)
// let InA4_PickOrder_03 = A4_PickOrder_03(30)
// let InA4_PickOrder_04 = A4_PickOrder_04(30)

let InA5_TakeingReservation_01 = A5_TakeingReservation_01(30)
let InA5_TakeingReservation_02 = A5_TakeingReservation_02(30)
let InA5_TakeingReservation_03 = A5_TakeingReservation_03(30)
let InA5_TakeingReservation_04 = A5_TakeingReservation_04(30)
let InA5_TakeingReservation_05 = A5_TakeingReservation_05(30)
let coerdataoflession = [].concat(
    // InA3_Recommends.core,
    // InA3_Recommends1.core,
    // InA3_RecommendsAndQs.core,
    // InA3_RecommendsAndQs1.core,
    // InA3_Recommends1AndOrderDrinks.core, InA2_Togo.core,
    // InA2_EatHere.core,
    // InA2_OrderAtTable.core,
    // InA2_Menu.core,
    // InA2_Tool.core,
    // InA2_BabyChair.core,
    // InA2_Toilet.core,
    // InA4_PickOrder_01.core,
    // InA4_PickOrder_02.core,
    // InA4_PickOrder_03.core,
    // InA4_PickOrder_04.core,
    // InA5_TakeingReservation_01.core,
    // InA5_TakeingReservation_02.core,
    // InA5_TakeingReservation_03.core,
    // InA5_TakeingReservation_04.core,
    InA5_TakeingReservation_05.core
)

let DataTable = [
    // InA2_Togo.tool.m01.concat(InA2_EatHere.tool.m01),
    // InA2_Togo.tool.m02.concat(InA2_Togo.tool.m03),
    // InA2_Menu.tool.m01,
    // InA2_BabyChair.tool.m01.concat(InA2_Toilet.tool.m01),
    // InA4_PickOrder_01.tool.m00,
    InA5_TakeingReservation_01.tool.m00
]

const Bai55
    = [
        {
            "nameoflession": "Bài 5_05",
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
module.exports = Bai55




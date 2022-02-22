const ArrPeple = require("../../dataHelperFunction/ArrOfpeple")
const pickNRandomElementsOfArray = require("../../dataHelperFunction/pickNRandomElementsOfArray")
const getElementsToDataTable = require("../../dataHelperFunction/getElementsToDataTable")
const Fnperson = require("../../dataHelperFunction/Fnperson")
const FnObjHanldingNext = require("../../dataHelperFunction/FnObjHanldingNext")
const FnToArrobj = require("../../dataHelperFunction/FnToArrobj")
const convertArrToObjSource = require("../../dataHelperFunction/convertArrToObjSource")
const objEndSuccefull = require("../../dataHelperFunction/objEndSuccefull")


const Food = require("./A1_foods")
const dataPickuptable_01 = require("./A1_tableOfPickup_01")
const dataPickuptable_02 = require("./A1_tableOfPickup_02")

const dataTableBooked = require("./A1_tableOfBooking")
const dataPhoneNumber = require("./A1_phonenumber")


let ArrOfSubmit;
let dataTableBooked_use = dataTableBooked.slice(18, 21)

let dataHowmanypeople = ["2", "3", "4", "5", "6"]

module.exports = function A5_TakeingReservation_01(n) {

    let DataTable = {
        "m00": dataTableBooked,
    }

    let output = [].concat(
        getOutputT(DataTable, 30),
    )

    return { "core": output, "tool": DataTable }
}

function getOutputT(DataTable, n) {
    let outputT = []
    ArrPeple.slice(0, n).forEach(e => {
        ArrOfSubmit = []
        let ArrInFN = {}
        ArrInFN.img = e[1]
        ArrInFN.gender = e[2]
        ArrInFN.viewPick = {
            "header": "Someone is calling!",
            "img": "https://i.postimg.cc/nhSBcRmz/man-In-Call.jpg"
        }
        let SpeakFirst = ["Hi", "Hello"]
        let nameBE = ", sir"
        if (e[2] === "female") {
            nameBE = ", ma'am"
        }
        let objUse = {
            "date": pickNRandomElementsOfArray(dataTableBooked_use, 3),
            "phonenumber": pickNRandomElementsOfArray(dataPhoneNumber, 3),
            "manypeople": pickNRandomElementsOfArray(dataHowmanypeople, 3)
        }


        let Begin = [
            {
                "index": "0",
                "handle": FnObjHanldingNext(
                    [
                        "Welcome to ABC restaurant. How can I help you" + nameBE + "?",
                    ],
                    [
                        "I want to book a table.",
                        "I want to book a table in advance."
                    ],
                )
            },
            {
                "index": "1",
                "handle": FnObjHanldingNext(
                    ["How can I help you" + nameBE + "?", "May I help you" + nameBE + "?"],
                    [
                        "Is this ABC restaurant?",
                    ]
                )
            },
            {
                "index": "1-0",
                "handle": FnObjHanldingNext(
                    ["Yes, it is."],
                    [
                        "I want to book a table.",
                    ],
                )
            },
        ]

        let input_01_Begin = []
        let input_02_Begin = []

        Begin.forEach(e => {
            input_01_Begin.push(e.index)
            input_02_Begin.push(e.handle)
        })
        let Mid = [
            {
                "index": "0",
                "handle": FnObjHanldingNext(
                    [
                        "Which day do you want to book?",
                        "For what day" + nameBE,
                        "For which day" + nameBE,
                    ],
                    [
                        "The " + objUse.date[0].Date
                    ]
                )
            },
            {
                "index": "0-0",
                "handle": FnObjHanldingNext(
                    [
                        "Sorry" + nameBE + ". All the tables is booked that day.",
                        "Sorry" + nameBE + ". All tables are fully booked.",
                        "Unfortunately" + nameBE + ". We run out of tables that day.",
                    ],
                    [
                        "Unfortunately!",
                        "That's a pity"
                    ]
                )
            },
            {
                "index": "0-0-0",
                "handle": FnObjHanldingNext(
                    [
                        "Do you want to change to another day" + nameBE + "?",
                    ],
                    [
                        "No thanks.",
                    ],
                    objEndSuccefull
                )
            },

            {
                "index": "1",
                "handle": FnObjHanldingNext(
                    [
                        "What is your name" + nameBE + "?", "Can I have your name" + nameBE + "?", "Under what name, please?",
                    ],
                    [
                        e[0],
                        "My name is " + e[0]
                    ]
                )
            },
            {
                "index": "2",
                "handle": FnObjHanldingNext(
                    [
                        "What is your phone number" + nameBE + "?",
                        "Can I have your phone number" + nameBE + "?",
                        "How about your phone number" + nameBE + "?"
                    ],
                    [
                        "My phone number is " + objUse.phonenumber[0]
                    ]
                )
            },
            {
                "index": "3",
                "handle": FnObjHanldingNext(
                    [
                        "How many people do you have" + nameBE + "?",
                        "For How many" + nameBE + "?"
                    ],
                    [
                        "A table for " + objUse.manypeople[0] + ", please!",
                        objUse.manypeople[0] + " people, please!",
                        "We have " + objUse.manypeople[0]
                    ]
                )
            },
        ]
        let input_01_Body = []
        let input_02_Body = []

        Mid.forEach(e => {
            input_01_Body.push(e.index)
            input_02_Body.push(e.handle)
        })




        let End = null


        ArrInFN.Submit = ArrOfSubmit



        outputT.push(
            Fnperson(
                ArrInFN,
                DataTable,
                FnToArrobj(input_01_Begin, input_02_Begin),
                FnToArrobj(input_01_Body, input_02_Body),
                End,
                SpeakFirst,
                ["hi", "hellow"]
            )
        )
    })

    return outputT
}

// function objaction_01(
//     Arr
// ) {

//     let obj = {
//         "action": {
//             "name": "Ghi nhận đơn đặt hàng của khách!",
//             "list": [],
//             "submit": []
//         }
//     }

//     Arr.forEach((e) => {
//         e.input.forEach((ee, ii) => {
//             if (e.index === ii) {
//                 obj.action.list.push(
//                     {
//                         "data": ee,
//                         "stt": true
//                     }
//                 )
//                 obj.action.submit.push(false)
//             } else {
//                 obj.action.list.push({ "data": ee, "stt": true })
//                 obj.action.submit.push(true)
//             }
//         })
//     })
//     return obj
// }

// function getArrDate(arrobj) {
//     let arrFn = []
//     arrobj.forEach(e => {
//         arrFn.push(e.Date)
//     })
//     return arrFn
// }
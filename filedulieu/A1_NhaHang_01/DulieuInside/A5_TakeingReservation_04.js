const ArrPeple = require("../../dataHelperFunction/ArrOfpeple")
const pickNRandomElementsOfArray = require("../../dataHelperFunction/pickNRandomElementsOfArray")
const getElementsToDataTable = require("../../dataHelperFunction/getElementsToDataTable")
const Fnperson = require("../../dataHelperFunction/Fnperson")
const FnObjHanldingNext = require("../../dataHelperFunction/FnObjHanldingNext")
const FnToArrobj = require("../../dataHelperFunction/FnToArrobj")
const convertArrToObjSource = require("../../dataHelperFunction/convertArrToObjSource")
const objEndSuccefull = require("../../dataHelperFunction/objEndSuccefull")




const dataTableBooked = require("./A1_tableOfBooking")
const dataPhoneNumber = require("./A1_phonenumber")
const shuffleArr = require("../../dataHelperFunction/shuffleArr")


let ArrOfSubmit;
let dataTableBooked_use = dataTableBooked.slice(0, 3)



let dataHowmanypeople = ["2", "3", "4", "5", "6"]
let dataTable = ["indoor table", "outdoor table"]


module.exports = function A5_TakeingReservation_04(n) {

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
            "manypeople": pickNRandomElementsOfArray(dataHowmanypeople, 3),
            "table": pickNRandomElementsOfArray(dataTable, 2)
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
                        "For what day, please?",
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
                        "We have space available that day. Do you have a seat request?",
                    ],
                    [
                        "I want an " + objUse.table[0]
                    ]
                )
            },
            {
                "index": "0-0-0",
                "handle": FnObjHanldingNext(
                    [
                        "So, you take  an " + objUse.table[0] + ". Right?",
                    ],
                    [
                        "That's right"
                    ]
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
            {
                "index": "4",
                "handle": FnObjHanldingNext(
                    [
                        "Please wait a moment.",
                    ],
                    [
                        ""
                    ],
                    objaction_01(
                        [
                            {
                                "input": [e[0]],
                                "index": 0
                            },
                            {
                                "input": objUse.phonenumber,
                                "index": 0
                            },
                            {
                                "input": getArrDate(objUse.date),
                                "index": 0
                            },
                            {
                                "input": objUse.manypeople,
                                "index": 0
                            },
                            {
                                "input": objUse.table,
                                "index": 0
                            }
                        ]
                    )
                )
            },
            {
                "index": "4-0",
                "handle": FnObjHanldingNext(
                    [
                        "Your reservation is for the "
                        + objUse.date[0].Date + ". For "
                        + objUse.manypeople[0] + " people. Under name "
                        + e[0] + ", and "
                        + objUse.table[0] + ". Is it right?",
                    ],
                    [
                        "That's right."
                    ]
                )
            },
            {
                "index": "4-0-0",
                "handle": FnObjHanldingNext(
                    [
                        "Do you want to order something in advance!",
                    ],
                    [
                        "No thanks."
                    ]
                )
            },
            ,
            {
                "index": "4-0-0-0",
                "handle": FnObjHanldingNext(
                    [
                        "Thank you. See you soon.",
                    ],
                    [
                        "Thank you."
                    ],
                    objEndSuccefull
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


function objaction_01(Arr) {
    let arrT = []
    Arr.forEach((e) => {
        e.input.forEach((ee, ii) => {
            if (e.index === ii) {
                arrT.push(
                    {
                        "data": ee,
                        "stt": true,
                        "submit": false
                    }
                )
            } else {
                arrT.push({ "data": ee, "stt": true, "submit": true })
            }
        })
    })

    return {
        "action": {
            "name": "Ghi nhận đơn đặt hàng của khách!",
            "list": shuffleArr(arrT),
        }
    }
}

function getArrDate(arrobj) {
    let arrFn = []
    arrobj.forEach(e => {
        arrFn.push(e.Date)
    })
    return arrFn
}
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
const A4_begin1 = require("./A4_Begin1")

let ArrOfSubmit;

module.exports = function A4_PickOrder_02(n) {




    let DataTable = {
        "m00": dataPickuptable_02
    }

    let output = [].concat(
        getOutputT(DataTable, 0),
        getOutputT(DataTable, 1),
        getOutputT(DataTable, 2)
    )

    return { "core": output.concat(output, output), "tool": DataTable }
}

function getOutputT(DataTable, n) {
    let outputT = []
    dataPickuptable_01.slice(10, 20).forEach(e => {
        ArrOfSubmit = []
        let ArrInFN = {}
        ArrInFN.img = e.img
        ArrInFN.gender = e.Gender
        ArrInFN.viewPick = {
            "header": "Guest at the door.",
            "img": "https://i.postimg.cc/kgRbM0Rv/guest-Is-Comming.jpg"
        }
        let SpeakFirst = ["Hi", "Hello"]

        let input_01_Begin = []
        let input_02_Begin = []

        A4_begin1(e).forEach(ee => {
            input_01_Begin.push(ee.index)
            input_02_Begin.push(ee.handle)
        })
        let Mid = [
            {
                "index": "0",
                "handle": FnObjHanldingNext(
                    ["Can I have your name?", "What is your name?"],
                    [
                        "My name is " + e.Name,
                        e.Name,
                        "It's " + e.Name
                    ]
                )
            },
            {
                "index": "1",
                "handle": R_phonenumber(e, n)
            },
            {
                "index": "2",
                "handle": R_receiptnumber(e, n)
            },
            {
                "index": "3",
                "handle": FnObjHanldingNext(
                    [
                        "Your order is " + e["Ordered food"] + ". Is it right?",
                        "You order " + e["Ordered food"] + ". Right?"
                    ],
                    ["Yes it is."]
                )
            },
            {
                "index": "3-0",
                "handle": FnObjHanldingNext(
                    ["Your order is ready!"],
                    ["How much is it?"],

                )
            },
            {
                "index": "3-0-0",
                "handle": FnObjHanldingNext(
                    [
                        "It is " + e["Total Price"] + " dollars",
                        "Your bill is " + e["Total Price"] + " dollars",
                        "It is $" + e["Total Price"],
                    ],
                    ["Here you are!"],
                    nhantien(e)
                )
            },
            {
                "index": "3-0-0-0",
                "handle": FnObjHanldingNext(
                    [
                        "I get $" + e["Total Price"],
                        "I receive $" + e["Total Price"],
                        "I get " + e["Total Price"] + " dollars",
                        "I receive " + e["Total Price"] + " dollars",
                    ],
                    ["That's right."],
                    giaodoan(e)
                )
            },
            {
                "index": "3-0-0-0-0",
                "handle": FnObjHanldingNext(
                    [
                        "Here you are!"
                    ],
                    ["Thank you!"],
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
                "Hi"
            )
        )
    })

    return outputT
}



function giaodoan(e) {
    return {
        "action": {
            "name": "Giao đồ ăn cho khách!",
            "list":
                [
                    {
                        "title": e["Ordered food"],
                        "data": "https://i.postimg.cc/ryZmZ7Bz/online-food-delivery-courier-delivers-paper-package-with-foodstuff-fast-delivery-service-human-carto.jpg",
                        "stt": true,
                        "submit": false
                    }
                ],

        }
    }
}


function nhantien(e) {
    return {
        "action": {
            "name": "Nhận tiền thanh toán!",
            "list":
                [
                    {
                        "title": e["Total Price"] + "$",
                        "data": "https://i.postimg.cc/hPsBMTx1/money.jpg",
                        "stt": false,
                        "submit": true
                    }
                ],
        }
    }
}


function R_phonenumber(e, n) {
    let Arr_01 = [
        FnObjHanldingNext(
            ["What is your phone number?", "How about your phone number?"],
            [
                "It's " + e["Phone number"],
                e["Phone number"]
            ]
        ),
        FnObjHanldingNext(
            ["What is your phone number?", "How about your phone number?"],
            [
                "It's " + e["Phone number"],
                e["Phone number"]
            ]
        ),
        FnObjHanldingNext(
            ["What is your phone number?", "How about your phone number?"],
            [
                "Actually, I came to pick up my friend's order, I don't remember the phone number",
                "Sorry, I don't remember. Actually, I came to pick up my friend's order."
            ]
        )
    ]

    return Arr_01[n]
}


function R_receiptnumber(e, n) {

    let Arr_02 = [
        FnObjHanldingNext(
            ["What is your Receipt number?", "How about the Receipt number?"],
            [
                "It's " + e["Receipt number"],
                e["Receipt number"]
            ],
        ),
        FnObjHanldingNext(
            ["What is your Receipt number?", "How about the Receipt number?"],
            [
                "I don't remember.",
                "Sorry, I don't remember it."
            ],
        ),
        FnObjHanldingNext(
            ["What is your Receipt number?", "How about the Receipt number?"],
            [
                "It's " + e["Receipt number"],
                e["Receipt number"]
            ],
        )
    ]

    return Arr_02[n]
}

const ArrPeple = require("../../dataHelperFunction/ArrOfpeple")
const pickNRandomElementsOfArray = require("../../dataHelperFunction/pickNRandomElementsOfArray")
// const getElementsToDataTable = require("../../dataHelperFunction/getElementsToDataTable")
const Fnperson = require("../../dataHelperFunction/Fnperson")
const FnObjHanldingNext = require("../../dataHelperFunction/FnObjHanldingNext")
const FnToArrobj = require("../../dataHelperFunction/FnToArrobj")
// const convertArrToObjSource = require("../../dataHelperFunction/convertArrToObjSource")
const objEndSuccefull = require("../../dataHelperFunction/objEndSuccefull")





let ArrOfSubmit;


module.exports = function A5_TakeingReservation_01() {

    let DataTable = {
        
    }

    let output = [].concat(
        getOutputT(DataTable, 30),
    )

    return { "core": output, "tool": DataTable }
}

function getOutputT(DataTable) {
    let outputT = []
    ArrPeple.forEach(e => {
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
         
        }


        let Begin = [
            {
                "index": "0",
                "handle": FnObjHanldingNext(
                    [
                        "What",
                    ],
                    [
                        "Hi.",

                    ],
                )
            }
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
                        "Hello",

                    ],
                    [
                        "hi"
                    ],
                    [objEndSuccefull]
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
                ["Pick 20 person"]
            )
        )
    })

    return outputT
}


// const ArrPeple = require("../../dataHelperFunction/ArrOfpeple")
// const pickNRandomElementsOfArray = require("../../dataHelperFunction/pickNRandomElementsOfArray")
// const getElementsToDataTable = require("../../dataHelperFunction/getElementsToDataTable")
const Fnperson = require("../../dataHelperFunction/Fnperson")
const FnObjHanldingNext = require("../../dataHelperFunction/FnObjHanldingNext")
const FnToArrobj = require("../../dataHelperFunction/FnToArrobj")
// const convertArrToObjSource = require("../../dataHelperFunction/convertArrToObjSource")
// const objEndSuccefull = require("../../dataHelperFunction/objEndSuccefull")
const shuffleArr = require("../../dataHelperFunction/shuffleArr")
const DataA_jobCompany = require("../A/A_jobCompany")



let ArrOfSubmit;


module.exports = function A1_20JobCompany() {

    let DataTable = {}

    let output = [].concat(
        getOutputT(DataTable),
    )

    return { "core": shuffleArr(output), "tool": DataTable }
}

function getOutputT(DataTable) {
    let outputT = []
    DataA_jobCompany.slice(0, 20).forEach(e => {
        ArrOfSubmit = []
        let ArrInFN = {}
        ArrInFN.img = e.img
        ArrInFN.gender = e.gender
        ArrInFN.viewPick = {
            "header": "The main lobby!",
            "img": e.img,
            // "des": e.id
        }
        let SpeakFirst = ["Hi", "Hello"]
        let nameBE = ", sir"
        if (e.gender === "female") {
            nameBE = ", ma'am"
        }
        let objUse = {}

        let Begin = [
            {
                "index": "0",
                "handle": FnObjHanldingNext(
                    [
                        "Hi, how are you?",

                    ],
                    [
                        "I'm good.",
                        "I'm fine."
                    ],
                )
            },]

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
                        "What is your name" + nameBE + "?",

                    ],
                    [
                        "My name is " + e.name
                    ]
                )
            },
            {
                "index": "1",
                "handle": FnObjHanldingNext(
                    [
                        "What do you do?",

                    ],
                    [
                        "I am  " + e.jobTittle
                    ]
                )
            },
            {
                "index": "2",
                "handle": FnObjHanldingNext(
                    [
                        "Who do you do work for?",

                    ],
                    [
                        "I work for  " + e.nameCompany + " company."
                    ]
                )
            },
            {
                "index": "3",
                "handle": FnObjHanldingNext(
                    [
                        "Thank you.",

                    ],
                    [
                        "You are welcome."
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
                ["Hi"]
            )
        )
    })

    return outputT
}


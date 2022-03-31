// const ArrPeple = require("../../dataHelperFunction/ArrOfpeple")
// const pickNRandomElementsOfArray = require("../../dataHelperFunction/pickNRandomElementsOfArray")
// const getElementsToDataTable = require("../../dataHelperFunction/getElementsToDataTable")
const Fnperson = require("../../dataHelperFunction/Fnperson")
const FnObjHanldingNext = require("../../dataHelperFunction/FnObjHanldingNext")
const FnToArrobj = require("../../dataHelperFunction/FnToArrobj")
// const convertArrToObjSource = require("../../dataHelperFunction/convertArrToObjSource")
// const objEndSuccefull = require("../../dataHelperFunction/objEndSuccefull")

const DataA_jobCompany = require("./A/A_jobCompany")
const FnData_20JobCompany = require("./A1_20JobCompany")
const FnData_Computer = require("./A2_ComputerInAdDepartment")

let ArrOfSubmit;


module.exports = function Amain_01() {

    let DataTable = {

    }

    let output = [].concat(
        getOutputT(DataTable),
    )

    return { "core": output, "tool": DataTable }
}

function getOutputT(DataTable) {
    let outputT = []
    DataA_jobCompany.slice(0, 1).forEach(e => {
        ArrOfSubmit = []
        let ArrInFN = {}
        ArrInFN.img = e.img
        ArrInFN.gender = e.gender
        ArrInFN.viewPick = {
            "header": "Calling!",
            "img": "https://i.postimg.cc/nhSBcRmz/man-In-Call.jpg",
            "des": e.id
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
                        "Hi, What can I do for you" + nameBE + " ?",

                    ],
                    [
                        "Can you go to the main lobby? There were 20 people there. I need you to list your name, occupation and company of them.",
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
                        "Yes of cource. I got it.",

                    ],
                    [
                        "That's good. Thank you so much!"
                    ],
                    {
                        "moveLocation": {
                            "dep0": FnData_20JobCompany(),
                            "dep19": FnData_Computer()
                        },
                    }
                )
            },
            {
                "index": "1",
                "handle": FnObjHanldingNext(
                    [
                        "What do I need to do" + nameBE + "?",

                    ],
                    [
                        [
                            "Please go down to the lobby first. There are 20 people waiting for you there.",
                            "Second, remember to greet them by. Hi, how are you?",
                            "Next, ask their name, occupation, and company by. What is your name? What do you do? Who do you work for?",
                            "Finally, come to Administration department and fill it in computer. The computer password is I love you."
                        ]
                    ]
                )
            },
            {
                "index": "2",
                "handle": FnObjHanldingNext(
                    [
                        "I got it.",
                    ],
                    [
                        "That's good. Thank you so much!"
                    ],
                    {
                        "moveLocation": {
                            "dep0": FnData_20JobCompany(),
                            "dep19": FnData_Computer()
                        },
                    }
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


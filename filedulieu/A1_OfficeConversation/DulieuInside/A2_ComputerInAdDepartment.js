// const ArrPeple = require("../../dataHelperFunction/ArrOfpeple")
// const pickNRandomElementsOfArray = require("../../dataHelperFunction/pickNRandomElementsOfArray")
// const getElementsToDataTable = require("../../dataHelperFunction/getElementsToDataTable")
const Fnperson = require("../../dataHelperFunction/Fnperson")
const FnObjHanldingNext = require("../../dataHelperFunction/FnObjHanldingNext")
const FnToArrobj = require("../../dataHelperFunction/FnToArrobj")
// const convertArrToObjSource = require("../../dataHelperFunction/convertArrToObjSource")
const objEndSuccefull = require("../../dataHelperFunction/objEndSuccefull")
const shuffleArr = require("../../dataHelperFunction/shuffleArr")
const DataA_jobCompany = require("./A/A_jobCompany")



let ArrOfSubmit;


module.exports = function A2_Computer() {

    let DataTable = {}

    let output = [].concat(
        getOutputT(DataTable),
    )

    return { "core": shuffleArr(output), "tool": DataTable }
}

function getOutputT(DataTable) {
    let outputT = []
    // DataA_jobCompany.slice(0, 1).forEach(e => {
    let e = DataA_jobCompany[0]
    ArrOfSubmit = []
    let ArrInFN = {}
    ArrInFN.img = "https://i.postimg.cc/wjJBbfkp/desktop.png"
    ArrInFN.gender = e.gender
    ArrInFN.viewPick = {
        "header": "Computer",
        "img": "https://i.postimg.cc/wjJBbfkp/desktop.png",
        "des": "Computer!"
    }
    let SpeakFirst = ["Please say your password!"]
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
                    "I love you!",

                ],
                [
                    "Your computer is already!",
                ],
                Record(DataA_jobCompany)
            )
        },
        {
            "index": "0-0",
            "handle": FnObjHanldingNext(
                [
                    "I'm done!",

                ],
                [
                    "",
                ],
                objEndSuccefull
            )
        },
    ]

    let input_01_Begin = []
    let input_02_Begin = []

    Begin.forEach(e => {
        input_01_Begin.push(e.index)
        input_02_Begin.push(e.handle)
    })
    let Mid = []
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
    // })

    return outputT
}

function Record(ARR_Input) {
    let ARR_Output = []

    ARR_Input.forEach((e, i) => {
        if (i < 20) {
            ARR_Output.push(
                {
                    "title": "",
                    "data": e.name + e.jobTittle + e.nameCompany,
                    "stt": true,
                    "submit": false
                }
            )
        }
        else {
            ARR_Output.push(
                {
                    "title": "",
                    "data": e.name + "-" + e.jobTittle + "-" + e.nameCompany,
                    "stt": true,
                    "submit": true
                }
            )
        }
    })
    return {
        "action": {
            "name": "Please enter data!",
            "list": shuffleArr(ARR_Output),

        }
    }
}

const ArrPeple = require("../../dataHelperFunction/ArrOfpeple")
const pickNRandomElementsOfArray = require("../../dataHelperFunction/pickNRandomElementsOfArray_01")
// const getElementsToDataTable = require("../../dataHelperFunction/getElementsToDataTable")
const Fnperson = require("../../dataHelperFunction/Fnperson")
const FnObjHanldingNext = require("../../dataHelperFunction/FnObjHanldingNext")
const FnToArrobj = require("../../dataHelperFunction/FnToArrobj")
// const convertArrToObjSource = require("../../dataHelperFunction/convertArrToObjSource")
const objEndSuccefull = require("../../dataHelperFunction/objEndSuccefull")
const shuffleArr = require("../../dataHelperFunction/shuffleArr")
const I01 = require("./A/C1")
const I02 = require("./A/A1_bai1")
const I03 = require("./A/A1_bai2")
const I04 = require("./A/E")
// const { end_successfull } = require("../../dataHelperFunction/objEndSuccefull")

let Input = I04.concat(I01, I02, I03)

let ArrOfSubmit;
let A1_data = []
Input.forEach(e => {
    A1_data.push(
        { "Answer": e.Answer }
    )
})
let ArrUse = [
    Input
]
module.exports = function B2_Bai2_01(n) {

    let output = []
    let DataTable = {
        "m01": A1_data
    }

    ArrPeple.forEach(e => {
        ArrOfSubmit = []
        let ArrInFN = {}
        ArrInFN.img = e[1]
        ArrInFN.gender = e[2]
        ArrInFN.viewPick = {
            "header": "Your questions",
            "img": "https://i.postimg.cc/jSzMzhTN/callwaiter.jpg"
        }


        let in_pickRandom01 = pickNRandomElementsOfArray(ArrUse[ArrUse.length - 1], 4)
        let objGet = in_pickRandom01[0]
        let objGet1 = in_pickRandom01[1]

        if (objGet1.length > 8) {
            ArrUse.push(
                objGet1.slice(4 - objGet1.length)
            )
        } else {
            ArrUse.push(Input)
        }
        let SpeakFirst = ["Are you ready?"]
        let ArrBegin = [
            FnObjHanldingNext(
                ["Ready", "I'm ready", "I am ready"],
                [objGet[0].Question],
                objaction_01(objGet, objGet[0].Answer)
            )
        ]

        let input_01_Body = [
            "0", "0-0", "0-0-0", "0-0-0-0"
        ]
        let input_02_Body = [
            FnObjHanldingNext(
                [objGet[0].Answer],
                [objGet[1].Question],
                objaction_01(objGet, objGet[1].Answer)
            ),
            FnObjHanldingNext(
                [objGet[1].Answer],
                [objGet[2].Question],
                objaction_01(objGet, objGet[2].Answer)
            ),
            FnObjHanldingNext(
                [objGet[2].Answer],
                [objGet[3].Question],
                objaction_01(objGet, objGet[3].Answer)
            ),
            FnObjHanldingNext(
                [objGet[3].Answer],
                ["Good job!"],
                objEndSuccefull
            ),
        ]

        let End = null

        ArrInFN.Submit = ArrOfSubmit



        output.push(
            Fnperson(
                ArrInFN,
                DataTable,
                ArrBegin,
                FnToArrobj(input_01_Body, input_02_Body),
                End,
                SpeakFirst,
                "Hi"
            )
        )
    })

    return { "core": output, "tool": DataTable }
}

function objaction_02(data, n) {
    let arrT = []
    data.forEach((e) => {

        if (e.Question === n) {
            arrT.push(
                {
                    "data": e.Question,
                    "stt": true,
                    "submit": false
                }
            )
        } else {
            arrT.push({ "data": e.Question, "stt": true, "submit": true })
        }
    })

    return {
        "action": {
            "name": "Your answers?",
            "list": shuffleArr(arrT),
        }
    }
}
function objaction_01(data, n) {
    let arrT = []
    data.forEach((e) => {

        if (e.Answer === n) {

            arrT.push(
                {
                    "data": e.Answer,
                    "stt": true,
                    "submit": false
                }
            )
        } else {
            arrT.push({ "data": e.Answer, "stt": true, "submit": true })
        }
    })

    return {
        "action": {
            "name": "Your answer?",
            "list": shuffleArr(arrT),
        }
    }
}
const ArrPeple = require("../../dataHelperFunction/ArrOfpeple")
const pickNRandomElementsOfArray = require("../../dataHelperFunction/pickNRandomElementsOfArray_01")
// const getElementsToDataTable = require("../../dataHelperFunction/getElementsToDataTable")
const Fnperson = require("../../dataHelperFunction/Fnperson")
const FnObjHanldingNext = require("../../dataHelperFunction/FnObjHanldingNext")
const FnToArrobj = require("../../dataHelperFunction/FnToArrobj")
// const convertArrToObjSource = require("../../dataHelperFunction/convertArrToObjSource")
const objEndSuccefull = require("../../dataHelperFunction/objEndSuccefull")

const A1_Bai1 = require("./A/C1")

let ArrOfSubmit;
let A1_data = []
A1_Bai1.forEach(e => {
    A1_data.push(
        { "Answer": e.Answer }
    )
})
let ArrUse = [
    A1_Bai1
]
module.exports = function B2_Bai1_02(n) {

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
            "header": "Pick a question",
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
            ArrUse.push(A1_Bai1)
        }
        let SpeakFirst = [objGet[0].Question]
        let ArrBegin = [
            FnObjHanldingNext(
                [objGet[0].Answer],
                [objGet[1].Question]
            )
        ]

        let input_01_Body = [
            "0"
        ]
        let input_02_Body = [
            FnObjHanldingNext(
                [objGet[1].Answer],
                ["Thank you!"],
                objEndSuccefull
            )
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



function fnAction_01(data, n) {
    let arrT = []
    data.forEach((e) => {
        if (e.IPA === n) {
            arrT.push(
                {
                    "data": e.Word,
                    "stt": true,
                    "submit": false
                }
            )
        } else {
            arrT.push({ "data": e.Word, "stt": true, "submit": true })
        }
    })

    return {
        "action": {
            "name": "Từ/cụm từ nào có phiên âm: " + n,
            "list": shuffleArr(arrT),
        }
    }
}
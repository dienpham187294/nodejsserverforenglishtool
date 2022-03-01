const ArrPeple = require("../../dataHelperFunction/ArrOfpeple")
const pickNRandomElementsOfArray = require("../../dataHelperFunction/pickNRandomElementsOfArray_01")
// const getElementsToDataTable = require("../../dataHelperFunction/getElementsToDataTable")
const Fnperson = require("../../dataHelperFunction/Fnperson")
const FnObjHanldingNext = require("../../dataHelperFunction/FnObjHanldingNext")
const FnToArrobj = require("../../dataHelperFunction/FnToArrobj")
// const convertArrToObjSource = require("../../dataHelperFunction/convertArrToObjSource")
const objEndSuccefull = require("../../dataHelperFunction/objEndSuccefull")
const shuffleArr = require("../../dataHelperFunction/shuffleArr")
const A1_Bai1 = require("./A1_bai1")
const A1_Bai_01 = require("./A1_bai1_01")
let ArrOfSubmit;

let ArrUse = [
    A1_Bai1
]
let ArrUseIPA = [
    A1_Bai_01
]
module.exports = function B2_Bai1() {

    let output = []
    let DataTable = {
        "m01": []
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


        let in_pickRandom01 = pickNRandomElementsOfArray(ArrUse[ArrUse.length - 1], 3)
        let objGet = in_pickRandom01[0]
        let objGet1 = in_pickRandom01[1]

        if (objGet1.length > 6) {
            ArrUse.push(
                objGet1.slice(3 - objGet1.length)
            )
        } else {
            ArrUse.push(A1_Bai1)
        }


        let in_pickRandomIPA = pickNRandomElementsOfArray(ArrUseIPA[ArrUseIPA.length - 1], 3)
        let objGetIPA = in_pickRandomIPA[0]
        let objGetIPA1 = in_pickRandomIPA[1]

        if (objGetIPA1.length > 6) {
            ArrUseIPA.push(
                objGetIPA1.slice(3 - objGetIPA1.length)
            )
        } else {
            ArrUseIPA.push(A1_Bai_01)
        }
        let SpeakFirst = [objGet[0].Question]
        let ArrBegin = [
            FnObjHanldingNext(
                [objGet[0].Answer],
                [objGet[1].Question]
            )
        ]

        let input_01_Body = [
            "0", "0-0", "0-0-0", "0-0-0-0", "0-0-0-0-0", "0-0-0-0-0-0"
        ]
        let input_02_Body = [
            FnObjHanldingNext(
                [objGet[1].Answer],
                [objGet[2].Question],
            ),
            FnObjHanldingNext(
                [objGet[2].Answer],
                [""],
                fnAction_01(A1_Bai_01, objGetIPA[0].IPA)
            ),
            FnObjHanldingNext(
                [objGetIPA[0].Word],
                [objGetIPA[0].Word],
                fnAction_01(A1_Bai_01, objGetIPA[1].IPA)
            ),
            FnObjHanldingNext(
                [objGetIPA[1].Word],
                [objGetIPA[1].Word],
                fnAction_01(A1_Bai_01, objGetIPA[2].IPA)
            ),
            FnObjHanldingNext(
                [objGetIPA[2].Word],
                [objGetIPA[2].Word],
                fnAction_02(A1_Bai1, objGet)
            ),
            FnObjHanldingNext(
                ["I'm done"],
                ["Good job.", "Keep going!"],
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

function fnAction_02(data, data1) {
    let arrT = []
    let cData = JSON.stringify(data1)
    data.forEach((e) => {
        if (cData.includes(e.Question)) {
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
        if (cData.includes(e.Answer)) {
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
            "name": "Những câu hỏi và trả lời đã sử dụng.",
            "list": shuffleArr(arrT),
        }
    }
}
const ArrPeple = require("../../dataHelperFunction/ArrOfpeple")
const pickNRandomElementsOfArray = require("../../dataHelperFunction/pickNRandomElementsOfArray_01")
const getElementsToDataTable = require("../../dataHelperFunction/getElementsToDataTable")
const Fnperson = require("../../dataHelperFunction/Fnperson")
const FnObjHanldingNext = require("../../dataHelperFunction/FnObjHanldingNext")
const FnToArrobj = require("../../dataHelperFunction/FnToArrobj")
const convertArrToObjSource = require("../../dataHelperFunction/convertArrToObjSource")
const objEndSuccefull = require("../../dataHelperFunction/objEndSuccefull")
const shuffleArr = require("../../dataHelperFunction/shuffleArr")
const A1_Bai1 = require("./A1_bai1"
)
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
module.exports = function A2_Bai1(n) {

    let output = []
    let DataTable = {
        "m01": A1_data
    }

    ArrPeple.slice(0, n).forEach(e => {
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
        let SpeakFirst = [""]
        let ArrBegin = [
            FnObjHanldingNext(
                ["Hi"],
                [""],
                objaction_01(objGet, objGet[0].VnAnswer)
            )
        ]

        let input_01_Body = [
            "0", "0-0", "0-0-0", "0-0-0-0"
        ]
        let input_02_Body = [
            FnObjHanldingNext(
                [objGet[0].Answer],
                [""],
                objaction_02(objGet, objGet[0].Question)
            ),
            FnObjHanldingNext(
                [objGet[0].Question],
                [""],
                objaction_01(objGet, objGet[1].VnAnswer)
            ),
            FnObjHanldingNext(
                [objGet[1].Answer],
                [""],
                objaction_02(objGet, objGet[1].Question)
            ),
            FnObjHanldingNext(
                [objGet[1].Question],
                [""],
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
            "name": "Câu hỏi nào phù hợp với câu trả lời trên?",
            "list": shuffleArr(arrT),
        }
    }
}
function objaction_01(data, n) {
    let arrT = []
    data.forEach((e) => {

        if (e.VnAnswer === n) {

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
            "name": "Câu nào có nghĩa là: " + n,
            "list": shuffleArr(arrT),
        }
    }
}
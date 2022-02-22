const ArrPeple = require("../../dataHelperFunction/ArrOfpeple")
const pickNRandomElementsOfArray = require("../../dataHelperFunction/pickNRandomElementsOfArray")
const getElementsToDataTable = require("../../dataHelperFunction/getElementsToDataTable")
const Fnperson = require("../../dataHelperFunction/Fnperson")
const FnObjHanldingNext = require("../../dataHelperFunction/FnObjHanldingNext")
const FnToArrobj = require("../../dataHelperFunction/FnToArrobj")
const convertArrToObjSource = require("../../dataHelperFunction/convertArrToObjSource")
const objEndSuccefull = require("../../dataHelperFunction/objEndSuccefull")



let ArrOfSubmit;

function A2_BabyChair(n) {

    let output = []
    let DataTable = {
        "m01": ["Yes of course! I bring it to you right now."]
    }

    ArrPeple.slice(0, n).forEach(e => {
        ArrOfSubmit = []
        let ArrInFN = {}
        ArrInFN.img = e[1]
        ArrInFN.gender = e[2]
        ArrInFN.viewPick = {
            "header": "Guest at the table.",
            "img": "https://i.postimg.cc/jSzMzhTN/callwaiter.jpg"
        }
        let SpeakFirst = ["Excuse me."]

        let ArrBegin = [
            FnObjHanldingNext(
                ["How can I help you?", "May I help you?", "What do you want?"],
                ["Do you have a baby chair?"]
            )
        ]

        let input_01_Body = [
            "0"
        ]
        let input_02_Body = [
            FnObjHanldingNext(
                ["Yes of course! I bring it to you right now."],
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

module.exports = A2_BabyChair 
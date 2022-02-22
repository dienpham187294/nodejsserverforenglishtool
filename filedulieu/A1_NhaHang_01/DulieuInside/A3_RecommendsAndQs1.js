const ArrPeple = require("../../dataHelperFunction/ArrOfpeple")
const pickNRandomElementsOfArray = require("../../dataHelperFunction/pickNRandomElementsOfArray")
const getElementsToDataTable = require("../../dataHelperFunction/getElementsToDataTable")
const Fnperson = require("../../dataHelperFunction/Fnperson")
const FnObjHanldingNext = require("../../dataHelperFunction/FnObjHanldingNext")
const FnToArrobj = require("../../dataHelperFunction/FnToArrobj")
const convertArrToObjSource = require("../../dataHelperFunction/convertArrToObjSource")
const objEndSuccefull = require("../../dataHelperFunction/objEndSuccefull")
const Food = require("./A1_foods")


let ArrOfSubmit;

module.exports = function A3_RecommendsAndQs1(n) {

    let output = []
    let DataTable = {

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

        let objInput = {
            "ci": pickNRandomElementsOfArray(Food, 1)
        }


        let ArrBegin = [
            FnObjHanldingNext(
                ["How can I help you?", "May I help you?", "What do you want?"],
                ["Can you give me a suggestion for today's dish?"],
                {},
                objInput.ci[0].img
            )
        ]


        let Mid = [
            {
                "index": "0",
                "handle": FnObjHanldingNext(
                    ["I recommend the " + objInput.ci[0].input],
                    ["Ok get me this dish."]
                )
            },
            {
                "index": "0-0",
                "handle": FnObjHanldingNext(
                    ["Do you need anything esle."],
                    ["By the way, do you have any baby chairs?"]
                )
            },
            ,
            {
                "index": "0-0-0",
                "handle": FnObjHanldingNext(
                    ["Yes of course, I bring it to you right now."],
                    ["I appreciate it"],
                    objEndSuccefull
                )
            }
        ]
        let input_01_Body = []
        let input_02_Body = []

        Mid.forEach(e => {
            input_01_Body.push(e.index)
            input_02_Body.push(e.handle)
        })




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


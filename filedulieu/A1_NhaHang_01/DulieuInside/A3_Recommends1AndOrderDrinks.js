const ArrPeple = require("../../dataHelperFunction/ArrOfpeple")
const pickNRandomElementsOfArray = require("../../dataHelperFunction/pickNRandomElementsOfArray")
const getElementsToDataTable = require("../../dataHelperFunction/getElementsToDataTable")
const Fnperson = require("../../dataHelperFunction/Fnperson")
const FnObjHanldingNext = require("../../dataHelperFunction/FnObjHanldingNext")
const FnToArrobj = require("../../dataHelperFunction/FnToArrobj")
const convertArrToObjSource = require("../../dataHelperFunction/convertArrToObjSource")
const objEndSuccefull = require("../../dataHelperFunction/objEndSuccefull")
const Food = require("./A1_foods")
const Drink = require("./A1_drinks")

let ArrOfSubmit;

module.exports = function A3_Recommends1AndOrderDrinks(n) {

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
            "ci": pickNRandomElementsOfArray(Food, 2),
            "ciDri": pickNRandomElementsOfArray(Drink, 1),
        }
        ArrOfSubmit.push(objInput.ciDri[0].img)

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
                    ["I don't really like it, do you have another dish?"],
                    {},
                    objInput.ci[1].img
                )
            },
            {
                "index": "0-0",
                "handle": FnObjHanldingNext(
                    ["How about the " + objInput.ci[1].input],
                    ["Ok get me this dish."],
                )
            },
            {
                "index": "0-0-0",
                "handle": FnObjHanldingNext(
                    ["Do you need anything else?"],
                    ["I want to order " + objInput.ciDri[0].input],
                )
            }
        ]
        let input_01_Body = []
        let input_02_Body = []

        Mid.forEach(e => {
            input_01_Body.push(e.index)
            input_02_Body.push(e.handle)
        })


        let End = [
            {
                "index": "0",
                "handle": FnObjHanldingNext(
                    ["I got it. Do you need anything else?"],
                    ["No thanks. That's enough."],
                    objEndSuccefull
                )
            }
        ]
        let EndFN;
        try {
            let input_01_End = []
            let input_02_End = []

            End.forEach(e => {
                input_01_End.push(e.index)
                input_02_End.push(e.handle)
            })
            EndFN = FnToArrobj(input_01_End, input_02_End)

        } catch (error) {
            EndFN = null
        }







        ArrInFN.Submit = ArrOfSubmit



        output.push(
            Fnperson(
                ArrInFN,
                DataTable,
                ArrBegin,
                FnToArrobj(input_01_Body, input_02_Body),
                EndFN,
                SpeakFirst,
                "Hi"
            )
        )
    })

    return { "core": output, "tool": DataTable }
}


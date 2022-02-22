const ArrPeple = require("../../dataHelperFunction/ArrOfpeple")
const pickNRandomElementsOfArray = require("../../dataHelperFunction/pickNRandomElementsOfArray")
const getElementsToDataTable = require("../../dataHelperFunction/getElementsToDataTable")
const Fnperson = require("../../dataHelperFunction/Fnperson")
const FnObjHanldingNext = require("../../dataHelperFunction/FnObjHanldingNext")
const FnToArrobj = require("../../dataHelperFunction/FnToArrobj")
const convertArrToObjSource = require("../../dataHelperFunction/convertArrToObjSource")
const objEndSuccefull = require("../../dataHelperFunction/objEndSuccefull")

const A1_foods = require("./A1_foods")
const A1_drinks = require("./A1_drinks")


let ArrOfSubmit;

module.exports = function A2_OrderAtTable(n) {

    let output = []
    let DataTable = {
        "m01": ["For here", "To go"],
        "m02": getElementsToDataTable(A1_foods, "img"),
        "m03": getElementsToDataTable(A1_drinks, "img"),
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
                ["I want to order.", "Order, please!", "Can I order now?"]
            )
        ]

        let input_01_Body = [
            "0",
            "1",

        ]
        let input_02_Body = [
            FnObjHanldingNext(
                ["What would you like today?", "What do you want to order?"],
                AwFoods(A1_foods)
            ),
            FnObjHanldingNext(
                ["Do you want to take some drinks", "Something to drink?", "Do you want to order a drink?"],
                AwDrink(A1_drinks)
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

function AwFoods(foods) {

    let input = pickNRandomElementsOfArray(foods, 2)

    ArrOfSubmit.push(input[0].img)
    ArrOfSubmit.push(input[1].img)

    return (
        [
            "I want to take " + input[0].input + ", and " + input[1].input,
            input[0].input + ", and " + input[1].input + ", please!"
        ]
    )
}


function AwDrink(Drink) {
    let input = pickNRandomElementsOfArray(Drink, 2)

    ArrOfSubmit.push(input[0].img)
    ArrOfSubmit.push(input[1].img)

    return (
        [
            "I want to take " + input[0].input + ", and " + input[1].input,
            input[0].input + ", and " + input[1].input + ", please!"
        ]
    )
}
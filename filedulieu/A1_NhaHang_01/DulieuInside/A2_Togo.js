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

module.exports = function A2_Togo(n) {

    let output = []
    let DataTable = {
        "m01": ["For here", "To go"],
        "m02": getElementsToDataTable(A1_foods, "img"),
        "m03": getElementsToDataTable(A1_drinks, "img"),
    }

    ArrPeple.slice(0, n).forEach(e => {

        ArrOfSubmit = ["To go"]

        let ArrInFN = {}
        ArrInFN.img = e[1]
        ArrInFN.gender = e[2]
        ArrInFN.viewPick = {
            "header": "Guest at the door.",
            "img": "https://i.postimg.cc/kgRbM0Rv/guest-Is-Comming.jpg"
        }
        let SpeakFirst = ["Hi", "Hello"]
        let ArrBegin = [
            FnObjHanldingNext(
                ["Hi, how are you?", "Good afternoon, how are you?", "Good morning, how are you?", "Good evening, how are you?"],
                ["Doing fine", "Good", "I'm good", "I'm great"]
            )
        ]

        let input_01_Body = [
            "0",
            "1",
            "2"
        ]
        let input_02_Body = [
            FnObjHanldingNext(
                ["How can I help you?", "Do you want to eat here or to go?", "May I help you?"],
                ["I want to take to go?", "To go, please."]
            )
            ,
            FnObjHanldingNext(
                ["What would you like today?", "What do you want to order?"],
                AwFoods(A1_foods)
            )
            ,
            FnObjHanldingNext(
                ["Do you want to take some drinks", "Something to drink?", "Do you want to order a drink?"],
                AwDrink(A1_drinks),
              
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

    let input = pickNRandomElementsOfArray(foods, 1)

    ArrOfSubmit.push(input[0].img)

    return (
        [
            "I want to take " + input[0].input,
            input[0].input + ", please!"
        ]
    )
}


function AwDrink(Drink) {
    let input = pickNRandomElementsOfArray(Drink, 1)

    ArrOfSubmit.push(input[0].img)

    return (
        [
            "I want to take " + input[0].input,
            input[0].input + ", please!"
        ]
    )
}
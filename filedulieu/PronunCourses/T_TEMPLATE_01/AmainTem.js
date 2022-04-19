// const ArrPeple = require("../../dataHelperFunction/ArrOfpeple")
// const pickNRandomElementsOfArray = require("../../dataHelperFunction/pickNRandomElementsOfArray")
// const getElementsToDataTable = require("../../dataHelperFunction/getElementsToDataTable")
const Fnperson = require("../../dataHelperFunction/Fnperson")
const FnObjHanldingNext = require("../../dataHelperFunction/FnObjHanldingNext")
const FnToArrobj = require("../../dataHelperFunction/FnToArrobj")
// const convertArrToObjSource = require("../../dataHelperFunction/convertArrToObjSource")
// const objEndSuccefull = require("../../dataHelperFunction/objEndSuccefull")
const shuffleArr = require("../../dataHelperFunction/shuffleArr");
const objEndSuccefull = require("../../dataHelperFunction/objEndSuccefull");




let ArrOfSubmit;

module.exports = function A1_20JobCompany(DATA) {
    let DATAUSE = [].concat(DATA.data)
    let output = [].concat(
        getOutputT(DATAUSE),
    )

    return { "core": (output), "tool": {} }
}
// shuffleArr
function getOutputT(DATAUSE) {
    let outputT = []
    DATAUSE.forEach((e, iM) => {
        console.log(e.submit, iM)
        ArrOfSubmit = []
        let ArrInFN = {}
        ArrInFN.img = e.img
        ArrInFN.gender = e.gender
        ArrInFN.viewPick = {
            "header": "",
            "img": e.img,
            "des": e.name
        }
        let SpeakFirst = ["Hi", "Hello"]
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
                        "Hi, how are you?",

                    ],
                    [
                        "I'm good.",
                        "I'm fine."
                    ],
                )
            },]

        let input_01_Begin = []
        let input_02_Begin = []

        Begin.forEach(e => {
            input_01_Begin.push(e.index)
            input_02_Begin.push(e.handle)
        })



        let Mid = []
        let jn = 0
        e.QA.forEach((ee, i) => {
            jn++
            Mid.push(
                {
                    "index": "" + i,
                    "handle": FnObjHanldingNext(ee.qs, ee.aw)
                },
            )
        })
        Mid.push(
            {
                "index": "" + jn,
                "handle": FnObjHanldingNext([e.password], ["Say I'm done when you finish! Thank you!"], Record(DATAUSE, iM))
            },
        )


        Mid.push(
            {
                "index": "" + jn + "-0",
                "handle": FnObjHanldingNext(["I'm done", "Done", "I am done"], ["Copied it"], objEndSuccefull)
            },
        )
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
                [],
                FnToArrobj(input_01_Begin, input_02_Begin),
                FnToArrobj(input_01_Body, input_02_Body),
                End,
                SpeakFirst,
                [e.description + " " + e.password]
            )
        )
    })

    return outputT
}


function Record(ARR_Input, iM) {
    let ARR_Output = []
    ARR_Input.forEach((e, i) => {
        if (i === iM) {
            e.submit.forEach(e1 => {
                // console.log(e1)
                ARR_Output.push(
                    {
                        "title": "",
                        "data": e1,
                        "stt": true,
                        "submit": false
                    }
                )
            })
        }
        else {
            e.submit.forEach(e1 => {
                ARR_Output.push(
                    {
                        "title": "",
                        "data": e1,
                        "stt": true,
                        "submit": true
                    }
                )
            })
        }
    })
    return {
        "action": {
            "name": "Please enter data!",
            "list": shuffleArr(ARR_Output),

        }
    }
}

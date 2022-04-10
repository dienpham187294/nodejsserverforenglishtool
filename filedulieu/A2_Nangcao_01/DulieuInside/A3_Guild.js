// const ArrPeple = require("../../dataHelperFunction/ArrOfpeple")
// const pickNRandomElementsOfArray = require("../../dataHelperFunction/pickNRandomElementsOfArray")
// const getElementsToDataTable = require("../../dataHelperFunction/getElementsToDataTable")
// const Fnperson = require("../../dataHelperFunction/Fnperson")
// const FnObjHanldingNext = require("../../dataHelperFunction/FnObjHanldingNext")
// const FnToArrobj = require("../../dataHelperFunction/FnToArrobj")
// const convertArrToObjSource = require("../../dataHelperFunction/convertArrToObjSource")
// const objEndSuccefull = require("../../dataHelperFunction/objEndSuccefull")
// const shuffleArr = require("../../dataHelperFunction/shuffleArr")
const DataA_jobCompany = require("../A/A_jobCompany")


module.exports = function A3_Guild(ArrUse) {
    return getOutputT(DataA_jobCompany, ArrUse)
}

function getOutputT(DataTable, ArrUse) {
    let outputT = [
        "I want you to go to Laughing Dragon Inn.",
        "Then go to the main lobby, there are 30 people.",
    ]
    let t = "Find people named "
    ArrUse.forEach((e, i) => {

        if (i === ArrUse.length - 1) {
            t = t + "and " + DataTable[e].name
        } else {
            t = t + DataTable[e].name + ", "
        }


    });
    outputT.push(t)
    outputT.push(
        "Then ask them about their occupation and where they work.",
        "Then come back to Administration department and fill this data to the computer.",
        "The passwork of computer is I love you."
    )


    return outputT
}


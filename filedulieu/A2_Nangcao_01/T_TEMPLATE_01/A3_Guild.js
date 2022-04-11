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


module.exports = function A3_Guild(DATA, ArrUse) {
    return getOutputT(DATA.data, ArrUse)
}

function getOutputT(DATA, ArrUse) {
    let outputT = [
        "I want you to go to Laughing Dragon Inn.",
        "Then go to " + DATA[1].togo1,
    ]
    let t = "Find people named "
    console.log(ArrUse)
    ArrUse.forEach((e, i) => {
        if (i === ArrUse.length - 1) {
            t = t + "and " + DATA[e].name
        } else {
            t = t + DATA[e].name + ", "
        }
    });
    outputT.push(t)
    outputT.push(
        "Then ask them about " + DATA[1].ask,
        "Then come back to " + DATA[1].togo2 + " and fill this data to the computer.",
        "The passwork of the computer is: " + DATA[1].password
    )


    return outputT
}


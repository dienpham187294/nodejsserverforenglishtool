// const ArrPeple = require("../../dataHelperFunction/ArrOfpeple")
const pickNRandomElementsOfArray = require("../../dataHelperFunction/pickNRandomElementsOfArray")
// const getElementsToDataTable = require("../../dataHelperFunction/getElementsToDataTable")
const Fnperson = require("../../dataHelperFunction/Fnperson")
// const FnObjHanldingNext = require("../../dataHelperFunction/FnObjHanldingNext")
const FnToArrobj = require("../../dataHelperFunction/FnToArrobj")
// const convertArrToObjSource = require("../../dataHelperFunction/convertArrToObjSource")
// const objEndSuccefull = require("../../dataHelperFunction/objEndSuccefull")

const FnData_20JobCompany = require("./A1_20JobCompany")
const FnData_Computer = require("./A2_ComputerInAdDepartment")
const FNA3_Guild = require("./A3_Guild")
let ArrOfSubmit;


module.exports = function Amain_01(data) {
    let DataA_jobCompany = [].concat(data.data)
    let ArrIndexT = []
    DataA_jobCompany.forEach((e, i) => {
        ArrIndexT.push(i)
    })
    let ArrIN = [2, 3, 4]
    ALL_ARRUSE = []
    ArrIN.forEach((e, i) => {
        let ArrUse = pickNRandomElementsOfArray(ArrIndexT, e)
        ALL_ARRUSE.push(ArrUse)
    })


    let DataTable = {}
    let output = [].concat(
        getOutputT(DataA_jobCompany, ALL_ARRUSE, data),
    )

    return { "core": output, "tool": DataTable }
}

function getOutputT(DataA_jobCompany, ALL_ARRUSE, data) {

    let outputT = []
    DataA_jobCompany.slice(0, 3).forEach((e, i) => {
        ArrOfSubmit = []
        let ArrInFN = {}
        ArrInFN.img = e.img
        ArrInFN.gender = e.gender


        let objMoveLocation = {}
        objMoveLocation[DataA_jobCompany[1].code1] = FnData_20JobCompany(data)
        objMoveLocation[DataA_jobCompany[1].code2] = FnData_Computer(data, ALL_ARRUSE[i])
        ArrInFN.viewPick = {
            "header": "Calling!",
            "img": "https://i.postimg.cc/QdrkPKhZ/11-maze-map-game-puzzle-build-find-way-out-solution-labyrinth-mission-512.png",
            "des": e.name,
            "guild": {
                "img": e[1],
                "says": FNA3_Guild(data, ALL_ARRUSE[i]),
                "readIndex": [1, 0.9, 1]
            },
            "moveLocation": objMoveLocation,
        }

        let SpeakFirst = ["Hi", "Hello"]
        let nameBE = ", sir"
        if (e.gender === "female") {
            nameBE = ", ma'am"
        }

        ArrInFN.Submit = ArrOfSubmit



        outputT.push(
            Fnperson(
                ArrInFN,
                null,
                FnToArrobj([], []),
                FnToArrobj([], []),
                null,
                SpeakFirst,
                ["Hi"]
            )
        )
    })

    return outputT
}


// const ArrPeple = require("../../dataHelperFunction/ArrOfpeple")
const pickNRandomElementsOfArray = require("../../dataHelperFunction/pickNRandomElementsOfArray")
// const getElementsToDataTable = require("../../dataHelperFunction/getElementsToDataTable")
const Fnperson = require("../../dataHelperFunction/Fnperson")
// const FnObjHanldingNext = require("../../dataHelperFunction/FnObjHanldingNext")
const FnToArrobj = require("../../dataHelperFunction/FnToArrobj")
// const convertArrToObjSource = require("../../dataHelperFunction/convertArrToObjSource")
// const objEndSuccefull = require("../../dataHelperFunction/objEndSuccefull")

const DataA_jobCompany = require("../A/A_jobCompany")
const FnData_20JobCompany = require("../DulieuInside/A1_20JobCompany")
const FnData_Computer = require("../DulieuInside/A2_ComputerInAdDepartment")
const FNA3_Guild = require("../DulieuInside/A3_Guild")
let ArrOfSubmit;
let ArrIndexT = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29",
]


module.exports = function Amain_01() {
    let ArrIN = [2, 3, 4, 5, 6]
    ALL_ARRUSE = []
    ArrIN.forEach((e, i) => {
        let ArrUse = pickNRandomElementsOfArray(ArrIndexT, e)
        ALL_ARRUSE.push(ArrUse)
    })


    let DataTable = {}
    let output = [].concat(
        getOutputT(DataTable, ALL_ARRUSE),
    )

    return { "core": output, "tool": DataTable }
}

function getOutputT(DataTable, ALL_ARRUSE) {

    let outputT = []
    DataA_jobCompany.slice(0, 5).forEach((e, i) => {
        ArrOfSubmit = []
        let ArrInFN = {}
        ArrInFN.img = e.img
        ArrInFN.gender = e.gender
        ArrInFN.viewPick = {
            "header": "Calling!",
            "img": "https://i.postimg.cc/QdrkPKhZ/11-maze-map-game-puzzle-build-find-way-out-solution-labyrinth-mission-512.png",
            "des": e.name,
            "guild": {
                "img": e[1],
                "says": FNA3_Guild(ALL_ARRUSE[i]),
                "readIndex": [1, 0.9, 1]
            },
            "moveLocation": {
                "dep0": FnData_20JobCompany(),
                "dep19": FnData_Computer(ALL_ARRUSE[i])
            },
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
                DataTable,
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


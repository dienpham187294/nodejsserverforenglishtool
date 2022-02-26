
const shuffleArr = require("../dataHelperFunction/shuffleArr")

const A2_Bai1_02 = require("./DulieuInside/A2_Bai1_02")


let InA2_Bai1_02 = A2_Bai1_02(40)




let coerdataoflession = [].concat(
    InA2_Bai1_02.core,

)

let DataTable = [

]


const Bai1_02
    = [
        {
            "nameoflession": "",
            "srcYoutube": "",
            "storyBoicanh": "Luyện tập 02",
            "story": "",
            "dataTool": DataTable,
            "hoctap": {
                "listenRead": [],
                "listenOnly": [],
                "writeOnly": []
            },
            "status": "",
        },
        {
            "coerdataoflession": shuffleArr(shuffleArr(coerdataoflession))
        }
    ]
module.exports = Bai1_02




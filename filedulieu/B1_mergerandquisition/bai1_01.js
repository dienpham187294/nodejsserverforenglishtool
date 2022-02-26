
const shuffleArr = require("../dataHelperFunction/shuffleArr")

const A2_Bai1_01 = require("./DulieuInside/A2_Bai1_01")


let InA2_Bai1_01 = A2_Bai1_01(40)




let coerdataoflession = [].concat(
    InA2_Bai1_01.core,

)

let DataTable = [

]


const Bai1_01
    = [
        {
            "nameoflession": "",
            "srcYoutube": "",
            "storyBoicanh": "Luyện tập 01",
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
module.exports = Bai1_01




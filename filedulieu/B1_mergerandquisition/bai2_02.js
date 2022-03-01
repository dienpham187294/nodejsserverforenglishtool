
const shuffleArr = require("../dataHelperFunction/shuffleArr")

const B2_Bai2_02 = require("./DulieuInside/B2_Bai2_02")


let InB2_Bai2_02 = B2_Bai2_02(40)




let coerdataoflession = [].concat(
    InB2_Bai2_02.core,

)

let DataTable = [

]


const Bai2_02
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
module.exports = Bai2_02




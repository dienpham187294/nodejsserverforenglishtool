
const shuffleArr = require("../dataHelperFunction/shuffleArr")

const A2_Bai1 = require("./DulieuInside/A2_Bai1")


let InA2_Bai1 = A2_Bai1(40)




let coerdataoflession = [].concat(
    InA2_Bai1.core,
)

let DataTable = [
    // InA2_Bai1.tool.m01
]


const Bai1
    = [
        {
            "nameoflession": "Mergers and Acquisitions Explained_ A Crash Course on M&A",
            "srcYoutube": "https://www.youtube.com/embed/WBHzCDgEtVQ",
            "storyBoicanh": "M&A 01",
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
module.exports = Bai1




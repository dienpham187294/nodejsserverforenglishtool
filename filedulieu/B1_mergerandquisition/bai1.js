
const shuffleArr = require("../dataHelperFunction/shuffleArr")

const B2_Bai1 = require("./DulieuInside/B2_Bai1")


let InB2_Bai1 = B2_Bai1(40)




let coerdataoflession = [].concat(
    InB2_Bai1.core,
)

let DataTable = [
    // InB2_Bai1.tool.m01
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




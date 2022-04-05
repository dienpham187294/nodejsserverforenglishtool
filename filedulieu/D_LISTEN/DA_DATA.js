const hihowareyou = require("./DATALISTEN/Hihowareyou")
const Whatwouldyoulike = require("./DATALISTEN/Whatwouldyoulike")
const Somethingtodrink = require("./DATALISTEN/Somethingtodrink")
module.exports =
    [
        {
            "id": 1,
            "Words": "Hi, how are you?",
            "DataListen": hihowareyou
        },
        {
            "id": 2,
            "Words": "How can I help you?",
            "DataListen": hihowareyou
        },
        {
            "id": 3,
            "Words": "What would you like, today?",
            "DataListen": Whatwouldyoulike
        },
        {
            "id": 4,
            "Words": "Something to drink?",
            "DataListen": Somethingtodrink
        }
    ]
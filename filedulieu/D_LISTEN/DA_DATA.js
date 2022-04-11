const hihowareyou = require("./DATALISTEN/Hihowareyou")
const Whatwouldyoulike = require("./DATALISTEN/Whatwouldyoulike")
const Somethingtodrink = require("./DATALISTEN/Somethingtodrink")
const D1_fruits = require("./DATALISTEN/D1_fruits")
const D1_jobs = require("./DATALISTEN/D1_jobs")
const D1_name = require("./DATALISTEN/D1_name")
const D1_Department = require("./DATALISTEN/D1_Department")
const D1_Maps = require("./DATALISTEN/D1_Maps")
module.exports =
    [
        {
            "id": 9,
            "Words": "Maps",
            "DataListen": D1_Maps
        },
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
        },
        {
            "id": 5,
            "Words": "Name!",
            "DataListen": D1_name
        },
        {
            "id": 6,
            "Words": "Jobs!",
            "DataListen": D1_jobs
        },
        {
            "id": 7,
            "Words": "Fruits!",
            "DataListen": D1_fruits
        },
        {
            "id": 8,
            "Words": "Departments!",
            "DataListen": D1_Department
        }
    ]
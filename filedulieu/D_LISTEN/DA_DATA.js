const hihowareyou = require("./DATALISTEN/Hihowareyou")
const Whatwouldyoulike = require("./DATALISTEN/Whatwouldyoulike")
const Somethingtodrink = require("./DATALISTEN/Somethingtodrink")
const D1_fruits = require("./DATALISTEN/D1_fruits")
const D1_jobs = require("./DATALISTEN/D1_jobs")
const D1_name = require("./DATALISTEN/D1_name")
const D1_Department = require("./DATALISTEN/D1_Department")
const D1_Maps = require("./DATALISTEN/D1_Maps")
const E_Age = require("./DATALISTEN/E_Age")
const E_Name = require("./DATALISTEN/E_Name")
const E_WhereTheyFrom = require("./DATALISTEN/E_WhereTheyFrom")
const E_WhereTheyLive = require("./DATALISTEN/E_WhereTheyLive")
let ArrOutput = [
    {
        "id": 9,
        "Words": "Maps",
        "DataListen": D1_Maps
    },
    {
        "id": 9,
        "Words": "Age",
        "DataListen": E_Age
    },
    {
        "id": 9,
        "Words": "Name",
        "DataListen": E_Name
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
    },
    {
        "id": 8,
        "Words": "WhereTheyFrom!",
        "DataListen": E_WhereTheyFrom
    },
    {
        "id": 8,
        "Words": "WhereTheyLive!",
        "DataListen": E_WhereTheyLive
    }
]
ArrOutput.forEach((e, i) => {
    e.id = i
})


module.exports = ArrOutput

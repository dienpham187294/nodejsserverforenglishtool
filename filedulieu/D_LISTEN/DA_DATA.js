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
const F_DOB = require("./DATALISTEN/F_DOB")
const F_LineOfWord = require("./DATALISTEN/F_LineOfWord")
const G_Hobbies = require("./DATALISTEN/G_Hobbies")
let ArrOutput = [
    {

        "Words": "Maps",
        "DataListen": D1_Maps
    },
    {

        "Words": "Age",
        "DataListen": E_Age
    },
    {

        "Words": "Name",
        "DataListen": E_Name
    },
    {

        "Words": "Hi, how are you?",
        "DataListen": hihowareyou
    },
    {

        "Words": "How can I help you?",
        "DataListen": hihowareyou
    },
    {

        "Words": "What would you like, today?",
        "DataListen": Whatwouldyoulike
    },
    {

        "Words": "Something to drink?",
        "DataListen": Somethingtodrink
    },
    {

        "Words": "Name!",
        "DataListen": D1_name
    },
    {

        "Words": "Jobs!",
        "DataListen": D1_jobs
    },
    {

        "Words": "Fruits!",
        "DataListen": D1_fruits
    },
    {

        "Words": "Departments!",
        "DataListen": D1_Department
    },
    {
        "Words": "WhereTheyFrom!",
        "DataListen": E_WhereTheyFrom
    },
    {
        "Words": "WhereTheyLive!",
        "DataListen": E_WhereTheyLive
    },
    {
        "Words": "Day of Birth!",
        "DataListen": F_DOB
    },
    {
        "Words": "Line of Work!",
        "DataListen": F_LineOfWord
    },
    {
        "Words": "What do you like to do?",
        "DataListen": G_Hobbies
    }
]
ArrOutput.forEach((e, i) => {
    e.id = i
})


module.exports = ArrOutput


const data = require("../../database/Data_Listen.json")
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
const G_Tennis = require("./DATALISTEN/G_Tennis")
const G_Colors = require("./DATALISTEN/G_Colors")
const G_Foods = require("./DATALISTEN/G_Foods")
const H_Drinks = require("./DATALISTEN/H_Drinks")
const H_Movies = require("./DATALISTEN/H_Movies")
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
    },
    {
        "Words": "Do you like playing tennis?",
        "DataListen": G_Tennis
    },
    {
        "Words": "What kinds of food do you like? ",
        "DataListen": G_Foods
    },
    {
        "Words": "What color do you like?",
        "DataListen": G_Colors
    },
    {
        "Words": "What kinds of drinks do you like?",
        "DataListen": H_Drinks
    },
    {
        "Words": "What kinds of films do you like? ",
        "DataListen": H_Movies
    }
]

try {
    data.forEach(e => {
        ArrOutput.push(
            {
                "Words": e.name,
                "DataListen": e.data
            }
        )
    })
} catch (error) {
    console.log(e)
}

ArrOutput.forEach((e, i) => {
    e.id = i + 1
})


module.exports = ArrOutput



// async function ReadDataListen() {
//     console.log(3)
//     try {
//         await fs.readFile("../../database/Data_Listen.txt", 'utf8', (err, jsonFile) => {
//             if (!err) {
//                 try {
//                     console.log(JSON.parse(jsonFile))
//                 } catch (error) {
//                     console.log(error)
//                 }
//             }
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }
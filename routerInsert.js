// const express = require("express");
// const router = express.Router();
// const fs = require('file-system');

function insertDataFunc(router, jsonParser, fs) {
    router.post("/InsertListenData", jsonParser, (req, res) => {

        fs.readFile("./database/Data_Listen.json", 'utf8', (err, jsonFile) => {
            if (!err) {
                try {
                    let data = JSON.parse(jsonFile)
                    data.push({ name: req.body.name, data: JSON.parse(req.body.body) })
                    fs.writeFile("./database/Data_Listen.json", JSON.stringify(data))
                } catch (error) {
                    console.log(error)
                }
            }
        })
        res.send({ "success": true }).status(200);
    });

    router.post("/InsertSpeakData", jsonParser, (req, res) => {

        fs.readFile("./database/Data_Speak.json", 'utf8', (err, jsonFile) => {
            if (!err) {
                try {
                    let data = JSON.parse(jsonFile)
                    let outPut = data.concat(JSON.parse(req.body.body))
                    fs.writeFile("./database/Data_Speak.json", JSON.stringify(outPut))
                } catch (error) {
                    console.log(error)
                }
            }
        })
        res.send({ "success": true }).status(200);
    });
    router.post("/InsertPracticeData", jsonParser, (req, res) => {

        fs.readFile("./database/Data_Practice.json", 'utf8', (err, jsonFile) => {
            if (!err) {
                try {
                    let data = JSON.parse(jsonFile)
                    data.push({ name: req.body.name, fileName: "PronunCourses/" + req.body.name })
                    fs.writeFile("./database/Data_Practice.json", JSON.stringify(data))
                    fs.writeFile("./filedulieu/PronunCourses/" + req.body.name + ".json", JSON.stringify(getPracticeLestion(JSON.parse(req.body.body))))
                } catch (error) {
                    console.log(error)
                }
            }
        })
        res.send({ "success": true }).status(200);
    });

    router.post("/InsertMainPronunciationCreate", jsonParser, (req, res) => {

        fs.readFile("./database/MainPronunciationCreate.json", 'utf8', (err, jsonFile) => {
            if (!err) {
                try {
                    let data = JSON.parse(jsonFile)
                    data.push({ name: req.body.name, fileName: "PronunciationCourse/" + req.body.name })
                    fs.writeFile("./database/MainPronunciationCreate.json", JSON.stringify(data))
                    fs.writeFile("./filedulieu/PronunciationCourse/" + req.body.name + ".json", JSON.stringify(getPronunciation(JSON.parse(req.body.body))))
                } catch (error) {
                    console.log(error)
                }
            }
        })
        res.send({ "success": true }).status(200);
    });
}


module.exports = { insertDataFunc }

function getPracticeLestion(DAT) {
    let InAmainTem = AmainTem(DAT)
    let coerdataoflession = [].concat(
        InAmainTem.core,
    )
    let DataTable = []
    const outPut
        = [
            {
                "nameoflession": "B.3.2_01",
                "story": "",
                "dataTool": DataTable,
                "status": "",
            },
            {
                "coerdataoflession": shuffleArr(shuffleArr(coerdataoflession))
            }
        ]
    return outPut
}



function getPronunciation(DAT) {
    let InAmainTem = MainPronunciationCreate(DAT)
    let coerdataoflession = [].concat(
        InAmainTem.core,
    )
    let DataTable = []
    const outPut
        = [
            {
                "nameoflession": "B.3.2_01",
                "story": "",
                "dataTool": DataTable,
                "status": "",
            },
            {
                "coerdataoflession": shuffleArr(shuffleArr(coerdataoflession))
            }
        ]
    return outPut
}


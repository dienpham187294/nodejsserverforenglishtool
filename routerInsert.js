// const express = require("express");
// const router = express.Router();
// const fs = require('file-system');
const shuffleArr = require("./filedulieu/dataHelperFunction/shuffleArr")
const sents1000 = require("./database/1000sents.json")
const AmainTem = require("./filedulieu/PronunCourses/T_TEMPLATE_01/AmainTem")
const AmainTemGetGD3A = require("./filedulieu/PronunCourses/T_TEMPLATE_01/AmainTemGetGD3A")
const AmainTemGetGD4A = require("./filedulieu/PronunCourses/T_TEMPLATE_01/AmainTemGetGD4")
const AmainTemGetGDALL = require("./filedulieu/PronunCourses/T_TEMPLATE_01/AmainTemGetGDGAMEALL")
const MainPronunciationCreate = require("./filedulieu/PronunciationCourse/T_TEMPLATE_01/MainPronunciationCreate")



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




    router.post("/InsertGD3", jsonParser, (req, res) => {

        fs.readFile("./database/MainPronunciationCreate.json", 'utf8', (err, jsonFile) => {
            if (!err) {
                try {
                    let data = JSON.parse(jsonFile)
                    data.push({ name: req.body.name, fileName: "PronunciationCourse/" + req.body.name })
                    fs.writeFile("./database/MainPronunciationCreate.json", JSON.stringify(data))
                    fs.writeFile("./filedulieu/PronunciationCourse/" + req.body.name + ".json", JSON.stringify(getGD3(JSON.parse(req.body.body))))
                } catch (error) {
                    console.log(error)
                }
            }
        })
        res.send({ "success": true }).status(200);
    });
    router.post("/InsertGD4", jsonParser, (req, res) => {

        fs.readFile("./database/MainPronunciationCreate.json", 'utf8', (err, jsonFile) => {
            if (!err) {
                try {
                    let data = JSON.parse(jsonFile)
                    data.push({ name: req.body.name, fileName: "PronunciationCourse/" + req.body.name })
                    fs.writeFile("./database/MainPronunciationCreate.json", JSON.stringify(data))
                    fs.writeFile("./filedulieu/PronunciationCourse/" + req.body.name + ".json", JSON.stringify(getGD4(JSON.parse(req.body.body))))
                } catch (error) {
                    console.log(error)
                }
            }
        })
        res.send({ "success": true }).status(200);
    });

    router.post("/InsertGDALL", jsonParser, (req, res) => {

        fs.readFile("./database/MainPronunciationCreate.json", 'utf8', (err, jsonFile) => {
            if (!err) {
                try {
                    let data = JSON.parse(jsonFile)
                    data.push({ name: req.body.name, fileName: "PronunciationCourse/" + req.body.name })
                    fs.writeFile("./database/MainPronunciationCreate.json", JSON.stringify(data))
                    fs.writeFile("./filedulieu/PronunciationCourse/" + req.body.name + ".json", JSON.stringify(getALL(JSON.parse(req.body.body))))
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


function getGD3(DAT) {

    let InAmainTem = AmainTemGetGD3A(DAT)

    let coerdataoflession = [].concat(
        InAmainTem.core,
    )
    let DataTable = [
        sents1000
    ]
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


function getGD4(DAT) {

    let InAmainTem = AmainTemGetGD4A(DAT)

    let coerdataoflession = [].concat(
        InAmainTem.core,
    )
    let DataTable = [
        sents1000
    ]
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
function getALL(DAT) {

    let InAmainTem = AmainTemGetGDALL(DAT)

    let coerdataoflession = [].concat(
        InAmainTem.core,
    )
    let DataTable = [
        sents1000
    ]
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


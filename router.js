const express = require("express");
const router = express.Router();
const fs = require('file-system');

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

router.get("/", (req, res) => {
  res.send("Server is up and running. Success").status(200);
});
router.get("/2", (req, res) => {
  res.send("Server is up and running. Success 2").status(200);
});
router.get("/menuThuchanhcoban", (req, res) => {
  const data = require("./filedulieu/listLesson")
  res.send({ "data": data }).status(200);
});
router.get("/menuThuchanhkienthuc", (req, res) => {
  const data = require("./filedulieu/listLessonKienthuc")
  res.send({ "data": data }).status(200);
});
router.get("/menuIPA", (req, res) => {
  const data = require("./filedulieu/C_IPA/A_IPA")
  res.send({ "data": data }).status(200);
});
router.get("/menuNghe", (req, res) => {
  const data = require("./filedulieu/D_LISTEN/DA_DATA")
  res.send({ "data": data }).status(200);
});
router.get("/menuMusic", (req, res) => {
  const data = require("./filedulieu/C_IPA/B_Mucsic")
  res.send({ "data": data }).status(200);
});
///////////////

router.post("/loadDataThuchanhcoban", jsonParser, (req, res) => {
  const data = require("./filedulieu/" + req.body.id)
  res.send({ "data": data }).status(200);
});
router.post("/loadDataThuchanhkienthuc", jsonParser, (req, res) => {
  const data = require("./filedulieu/" + req.body.id)
  res.send({ "data": data }).status(200);
});
router.post("/loadDataVideoSrc", jsonParser, (req, res) => {
  const data = require("./filedulieu/listOfVideos")
  let output = ""
  data.forEach(e => {
    if (e.id === req.body.id) {
      output = e.videoSrc
    }
  })

  res.send({ "data": output }).status(200);
});


router.get("/loadDataThuchanhnangcao", jsonParser, (req, res) => {
  const data = require("./filedulieu/A2_Nangcao_01/bai1")
  res.send({ "data": data }).status(200);
});


router.post("/loadDataIPA", jsonParser, (req, res) => {
  const data = require("./filedulieu/C_IPA/A_IPA")
  let output = []
  data.forEach(e => {
    if (e.id == req.body.id) {
      output.push(e)
    }
  })

  res.send({ "data": output }).status(200);
});

router.post("/loadDataListen", jsonParser, (req, res) => {
  const data = require("./filedulieu/D_LISTEN/DA_DATA")
  let output = []
  data.forEach(e => {
    if (e.id == req.body.id) {
      output.push(e)
    }
  })

  res.send({ "data": output }).status(200);
});





router.post("/loadDataMusic", jsonParser, (req, res) => {
  const data = require("./filedulieu/C_IPA/B_Mucsic")
  let output;
  data.forEach(e => {
    if (e.id == req.body.id) {
      output = (e)
    }
  })

  res.send({ "data": output }).status(200);
});

router.post("/InsertListenData", jsonParser, (req, res) => {

  fs.readFile("./database/Data_Listen.json", 'utf8', (err, jsonFile) => {
    if (!err) {
      try {
        let data = JSON.parse(jsonFile)
        data.push({ name: req.body.name, data: req.body.body })
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

module.exports = router;

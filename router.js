const express = require("express");
const router = express.Router();
const fs = require('file-system');

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

router.get("/", (req, res) => {
  res.send("Server is up and running. Success").status(200);
});
router.get("/menuThuchanhcoban", (req, res) => {
  const data = require("./filedulieu/listLesson")
  res.send({ "data": data }).status(200);
});
router.post("/loadDataThuchanhcanban", jsonParser, (req, res) => {
  const data = require("./filedulieu/" + req.body.id)
  res.send({ "data": data }).status(200);
});



module.exports = router;
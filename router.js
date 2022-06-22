const express = require("express");
const router = express.Router();
const fs = require('file-system');


const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const getMenuRoute = require("./filedulieu/Z_dataIPAdata/getMenuData.json")
const loadDataInMenuRoute = require("./filedulieu/Z_dataIPAdata/loaddataInMenu.json")

const { getDataOnlyone } = require("./routerFuncLoadOnlyOne")
const { insertDataFunc } = require("./routerInsert")
const { EmailRouter } = require("./routerEmail")


router.get("/", (req, res) => {
  res.send("Server is up and running. Success").status(200);
});

getMenuRoute.forEach(e => {
  router.get(e.id, (req, res) => {
    const data = require(e.file)
    res.send({ "data": data }).status(200);
  });
})
loadDataInMenuRoute.forEach(e => {
  router.post(e.id, jsonParser, (req, res) => {
    const data = require("./filedulieu/" + req.body.id)
    res.send({ "data": data }).status(200);
  });
})
getDataOnlyone(router, jsonParser)
insertDataFunc(router, jsonParser, fs)
EmailRouter(router, jsonParser)

module.exports = router;


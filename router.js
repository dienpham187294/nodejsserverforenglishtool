const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Server is up and running. Success").status(200);
});
router.get("/api", (req, res) => {
  res.send({ "abc": "acb" }).status(200);
});
module.exports = router;
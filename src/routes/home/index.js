"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")
//const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.login);
router.get("/mainpage", ctrl.output.mainPage);
router.post("/login", ctrl.process.login);
  
// console.log(req.body);
// // console.log("포스트 왔어?")
// logFile(req.body);

module.exports = router;


"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");

router.get("/", ctrl.login);
router.get("/mainpage", ctrl.mainPage);

router.post("/login", ctrl.loginProcess);
  
// console.log(req.body);
// // console.log("포스트 왔어?")
// logFile(req.body);

module.exports = router;

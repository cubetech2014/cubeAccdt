//const { response } = require("express");
const logFile = require("../../public/js/home/log");
const UserStorage = require("../../models/UserStorage");

const output = {
  login: (req,res) => {
    //home.hbs를 사용함.
    //res.render("home", {
    //  message: "Cube Accdt"
    //});
    logFile(req.ip);
    res.render("home/login");
  },
  mainPage: (req,res) => {
    res.render("home/mainpage");
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
          pw = req.body.pw;
    console.log(UserStorage.getUsers("id", "pw"));
    const response = {};
    // if (users.id.includes(id)) {
    //   const idx = users.id.indexOf(id);
    //   if (users.pw[idx] === pw) {
    //     response.success = true;
    //     return res.json(response);        
    //   }
    // }

    response.success = false;
    response.msg = `로그인에 실패하였습니다. \n아이디 혹은 비밀번호를 확인하세요.`    
    return res.json(response);
    //console.log(req.body);
  },
}
  
module.exports = {
    output,
    process,
};
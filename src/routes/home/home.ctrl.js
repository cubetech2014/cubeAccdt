//const { response } = require("express");
const logFile = require("../../public/js/home/log");
const User = require("../../models/User");

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
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
    // const id = req.body.id,
    //       pw = req.body.pw;

    // const users = UserStorage.getUsers("id", "pw");

    // const response = {};
    // if (users.id.includes(id)) {
    //   const idx = users.id.indexOf(id);
    //   if (users.pw[idx] === pw) {
    //     response.success = true;
    //     return res.json(response);        
    //   }
    // }

    // response.success = false;
    // response.msg = `로그인에 실패하였습니다. \n아이디 혹은 비밀번호를 확인하세요.`    
    return res.json(response);
  },
}
  
module.exports = {
    output,
    process,
};
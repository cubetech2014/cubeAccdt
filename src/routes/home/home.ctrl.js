const logFile = require("../../public/js/home/log");

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

const users = {
  id: ["123", "234"],
  pw: ["123", "234"],
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
          pw = req.body.pw;
    
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.pw[idx] === pw) {
        return res.json({
          success: true,
        });
      }
    }
    return res.json({
      success: false,
      msg: `로그인에 실패하였습니다. \n아이디 혹은 비밀번호를 확인하세요.`
    });
    //console.log(req.body);
  },
}
  
  
module.exports = {
    output,
    process,
};
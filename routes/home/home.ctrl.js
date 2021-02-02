const logFile = require("../../public/log");

const login = (req,res) => {
    //home.hbs를 사용함.
    //res.render("home", {
    //  message: "Cube Accdt"
    //});
    logFile(req.ip);
    res.render("home/login");
};

const mainPage = (req,res) => {
    res.render("home/mainpage");
}
// const users = {
//     id: ['1','2'],
//     pw: ["1",'2'],
// };

const loginProcess = ((req,res) => {
    login: (req, res) => {
      const id = req.body.id,
            pw = req.body.pw;
  
      if (users.id.includes(id)) {
        const idx = users.id.indexOf(id);
        if (users.pw[idx] === pw){
          return res.json({
            success: true,
          });
        }
      }      
    }
});
  
// return res.json({
// success: false,
// });


module.exports = {
    login,
    mainPage,
    loginProcess,
};
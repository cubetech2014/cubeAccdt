'use static';

//모듈
const express = require('express');
const bodyParser = require("body-parser"); //웹에 입력값을 서버로 갖고 올 때 사용.

//const db_conn = require("./src/public/js/db_conn");
const logFile = require("./src/public/js/home/log");
//라우팅
const home = require("./src/routes/home");
const app = express();

/*
app.engine("ejs", ejs({
  extname: "ejs",
  defaultLayout: "layout.ejs",
  partialsDir: "partials"
  })
);
*/
//console.log(__dirname + '/src/public');

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/src/public'));
app.use(bodyParser.json()); //body 파싱을 하기 위해 바디 유즈 이것이 미들웨어 등록
app.use(bodyParser.urlencoded({ extended: true})); //url을 통해 전달되는 데이터에 한글 공백 등 제대로 인식 안되는걸 방지
/* 자동으로 넥스트 처리됨.
server.use((req, res, next) => {
  next();
});
*/
//라우팅 js를 모듈화 함.
app.use("/", home);

//못찾으면 이리로
app.use((req,res)=>{
  res.render("home/404");
});

module.exports = app;
'use static';

const express = require('express');
const hbs = require("express-handlebars"); //web 표현 방식. views가 절대 경로임.
const bodyParser = require("body-parser"); //웹에 입력값을 서버로 갖고 올 때 사용.

const db_conn = require("./public/db_conn");
const logFile = require("./public/log");
const home = require("./routes/home");

const now = new Date().toGMTString();
const port = 3000;
const app = express();

app.engine("hbs", hbs({
  extname: "hbs",
  defaultLayout: "layout.hbs",
  partialsDir: "partials"
  })
);
app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
/* 자동으로 넥스트 처리됨.
server.use((req, res, next) => {
  next();
});
*/
//라우팅 js를 모듈화 함.
app.use("/", home);

//못찾으면 이리로
app.use((req,res)=>{
  res.render("404");
});

app.listen(3000, (err) => {
  if (err) return console.log(err);
  console.log(`${now} 서버 시작합니다.`);
});

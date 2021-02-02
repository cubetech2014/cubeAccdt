const app = require("../main")

const port = 3000;
const now = new Date().toGMTString();

app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log(`${now} 서버 시작합니다.`);
});
  
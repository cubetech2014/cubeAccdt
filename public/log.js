const fs = require('fs');
const logPath = './connection.log';
const now = new Date().toGMTString();


function checkLogFile(){
  const isExists = fs.existsSync(logPath)
  //파일 없으면 만들어.
  if(!isExists){
    fs.writeFileSync(logPath,'');
    //console.log('File Write Complete!');
  }
}

function readLogFile(){
  checkLogFile()
  return fs.readFileSync(logPath).toString('utf8')
}

function writeLogFile(remoteAddress){
  //이전 로그 받기
  const beforeLog = readLogFile();
  //새로운 로그 작성
  const newLog = `${now}: ${remoteAddress} 접속함.`;
  //이전 로그에 이어 쓰기
  fs.writeFileSync(logPath, `${beforeLog}\n${newLog}`);
}

module.exports = writeLogFile;

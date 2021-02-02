"use strict";

const id = document.querySelector("#id");
const pw = document.querySelector("#password");
const loginBtn = document.querySelector("#loginBtn");

loginBtn.addEventListener("click", login);

function login() {    
  //alert(loginBtn)
  //console.log(id.value, pw.value)
  if(id.value == "" ){
    alert("ID를 입력하세요.");
    return
  };

  if(pw.value == ""){
    alert("비밀번호를 입력하세요.");
    return
  };  
//alert(id, pw)
  const req = {
    id: id.value,
    pw: pw.value
  };
//  console.log(req);
// console.log(JSON.stringify(req));

  fetch("/login", {
    method: "post",
    headers: {
      "content-Type": "application/JSON"
    },
    body: JSON.stringify(req),
  }).then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "mainPage";        
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("로그인 중 에러 발생");
    });
};

    
// .catch((err) => {
// console.error(new Error("로그인 중 에러 발생"));
// }); 
// alert(id + ' ' + pw)

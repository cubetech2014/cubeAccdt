"use strict";

const id = document.querySelector("#id");
const pw = document.querySelector("#password");
//var loginBtn = document.querySelector("#loginBtn")
//var loginBtn = document.querySelector("div")
//var loginBtn = document.querySelector("form span").innerHTML
const loginBtn = document.querySelector("#loginBtn")
//for (var i = 0; i<Template.length; i++){
//  var lBtn = 4
//}
console.log(loginBtn);
//alert(loginBtn)
loginBtn.addEventListener("click", login);

  function login(){
    //alert(loginBtn)
    // console.log(id.value, pw.value)
    if(id.value == "" || pw.value == ""){
      alert("ID 또는 비밀번호를 입력하세요.");
      return
    }
    //alert(id, pw)

    const req = {
      id: id.value,
      pw: pw.value
    };

    // console.log(req);
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
           location.href = "/";
         } else {
           alert(res.msg);
         }
      });
    
        
    // .catch((err) => {
    // console.error(new Error("로그인 중 에러 발생"));
    // }); 
    // alert(id + ' ' + pw)

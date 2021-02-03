"use strict";

class UserStorage {
    //#은 데이터 은닉화\
    //class 안에서는 const var 필요없음.
    //외부에서 가져오려면 static 정적 변수로 해야함.
    static #users = {
        id: ["123", "234"],
        pw: ["123", "234"],
        name: ["홍길동", "베트맨"]
    };    

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});        
        return;
    }
};
  
module.exports = UserStorage;
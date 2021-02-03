"use strict"

const UserStorage = require("./UserStorage");

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const body = this.body;
        const { id, pw } = UserStorage.getUsersInfo(body.id);

        if (id) {
            if (id === body.id && pw === body.pw) {
                return { success: true};
            }
            return { succes: false, msg: "비밀번호를 확인하세요."};            
        }
        return { success: false, msg: "존재하지 않는 아이디입니다."};
    }
}

module.exports = User;
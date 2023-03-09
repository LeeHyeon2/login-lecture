"use strict";

const UserStorage = require("./UserStorage");
class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body
        try {
            const { id, password } = await UserStorage.getUserInfo(client.id);

            if (id) {
                if (id === client.id && password === client.password) {
                    return { success: true };
                }
                return { success: false, msg: "비밀번호 틀림" }
            }
            return { success: false, msg: "아이디 존재 x" }
        } catch(err) {
            return { success: false, msg: err }
        }
    }

    async register() {
        const client = this.body;
        try {
            const response = await UserStorage.save(client);
            return response;
        } catch (err) {
            return { success: false, msg: err }
        }
    }
}

module.exports = User; 
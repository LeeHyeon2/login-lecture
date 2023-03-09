"use strict";

class UserStorage {
    // #으로 데이터 은닉화
    static #users = {
        id: ['test1', 'test2', 'test3'],
        password: ['1234', '1234', '123456'],
        name: ['이현', '이현2', '이현3'],
    };

    // 메서드로 정보 보내주기
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {})
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        return {success : true};
    }
}

module.exports = UserStorage;
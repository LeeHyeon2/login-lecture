"use strict";

const db = require("../config/db");
class UserStorage {


    static getUserInfo(id) {
        return new Promise((reslove, reject) => {
            const query = "SELECT * FROM users where id = ?;"
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                console.log(data[0])
                reslove(data[0]);
            })
        })
    }


    static async save(userInfo) {
        return new Promise((reslove, reject) => {
            const query = "INSERT INTO users(id,name,password) VALUES(?,?,?);";
            db.query(query,
                [userInfo.id, userInfo.name, userInfo.password],
                (err) => {
                    if (err) reject(`${err}`);
                    reslove({ success: true });
                })
        })
    }
}
module.exports = UserStorage;
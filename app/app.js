"user strict";

const express = require('express')
const app = express();

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine","ejs");

const home = require("./src/routes/home")
app.use("/",home); // use -> 미들 웨어를 등록해주는 메서드.

module.exports = app;

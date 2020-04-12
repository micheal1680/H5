const express = require("express");

const app = express();

// 跨域处理
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
  });


app.get("/index", (req, res) => {
    res.send({name: "abc", pwd: "111", code: 1});
})


app.listen(3000, () => {
    console.log("server run at 3000....")
})
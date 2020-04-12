const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();

app.use(cookieParser());
app.use(session({
    name: 'session-id',
    secret: "abc",
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000*60*60
    }
}));


app.get("/", (req, res) => {
    res.clearCookie("password"); //删除cookie
    console.log(req.session);

    //设置session
    req.session.aid = 1;
    req.session.username = "abc";

    res.send({r: "ok"})
})

app.listen(3000, () => {
    console.log("server run at 3000");
})

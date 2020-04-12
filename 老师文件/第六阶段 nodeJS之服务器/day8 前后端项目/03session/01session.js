const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

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
    console.log(req.session);

    req.session.aid = 1;
    req.session.username = "abc";

    res.send({r: "ok"})
})


app.listen(3001, () => {
    console.log("server run at 3001")
});
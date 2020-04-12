                                                                                                                                                                                                                                                        const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const UserModel = require("../Model/UserModel");

const cookieParser = require("cookie-parser");
const session = require("express-session");


router.use(cookieParser());
router.use(session({
    name: "session-id",
    secret: "hiditao",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000*60*60*24
    }
}))

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get("/", (req, res) => {
    res.send({code: 1, msg: "ok"})
})

router.get("/checkLogin", (req, res) => {
    console.log("check====" + JSON.stringify(req.session))
    console.log("check---" + req.session.aid)
    if(req.session.uid) {
        res.send({
            code: 1
        })
    } else {
        res.send({
            code: -1  //没有登录
        })
    }
})

// 登录操作
router.get("/login", (req, res) => {
    let userModel = new UserModel();
    console.log(req.body)

    // 登录操作
    userModel.login(req.query.username, req.query.password, (err, data) => {
        if(err) {
            console.log(err)
        }
        console.log(data[0]);
        if(!data.length) { //没有查询到用户
            res.send({
                code: -1,
                msg: "没有该用户"
            })
        } else {
            if(data[0].password === req.query.password) {
                console.log("data----" + data[0].id)
                //通过session设置id值，判断登录状态
                req.session.username = data[0].username;
                req.session.aid = data[0].id;
                console.log(JSON.stringify(req.session))

                res.send({
                    code: 1,
                    msg: "登录成功",
                    aid: data[0].id
                })
            } else {
                res.send({
                    code: -2,
                    msg: "密码错误"
                })
            }
        }
    })
})

module.exports = router;
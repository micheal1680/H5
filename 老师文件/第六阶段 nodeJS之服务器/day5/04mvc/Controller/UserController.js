const express = require("express");
const router = express.Router();
const UserModel = require("../Model/UserModel");
const bodyParser = require("body-parser");

//通过body-parser模块处理post请求的参数
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json())

router.get("/login", (req, res) => {
    let userdata = req.query;  //获取参数信息

    let userModel = new UserModel();//创建模型层的UserModel对象
    // 调用相应的函数处理请求：执行对应的sql语句
    userModel.login(userdata.username, userdata.password, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        if (!data.length) { //用户不存在
            res.send({ code: -1, msg: "用户不存在" })
            return;
        }

        // 用户存在并且密码正确
        if (data[0].password == userdata.password) {
            res.send({ code: 1, msg: "登录成功" })
        } else { //密码错误
            res.send({ code: 0, msg: "密码错误" })
        }
    });
});

router.get("/register", (req, res) => {
    //获取参数信息
    let userdata = req.query;

    let userModel = new UserModel(); //创建模型层UserModel对象
    //调用方法注册用户
    userModel.register(userdata.username, userdata.password, (err, data) => {
        if (err) {
            console.log("插入数据失败")
            return;
        }
        console.log(data);
        if (data.affectedRows) { //数据插入成功 affectedRows   1
            res.send({ code: 2, msg: "用户注册成功" })
        } else {
            res.send({ code: -3, msg: "注册失败" })
        }
    });
})

router.post("/changepwd", (req, res) => {
    console.log("changepwd---" + JSON.stringify(req.body));

    let userdata = req.body; //取出用户的参数信息

    let userModel = new UserModel();
    userModel.changepwd(userdata.username, userdata.newpwd, (err, data) => {
        if(err) {
            console.log(err);
            return;
        }

        console.log(data);
        if(data.affectedRows) { //影响的行数，修改成功时，值为整数（修改了几条记录）
            res.send({code: 100, msg: "修改密码成功"})
        }
    })


    
})

// 导出路由对象
module.exports = router;
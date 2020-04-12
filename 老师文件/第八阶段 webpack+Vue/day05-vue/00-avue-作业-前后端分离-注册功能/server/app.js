let express = require("express");
let mysql = require("mysql")
let bodyParser = require("body-parser");
let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
let mydb = mysql.createConnection({
    local: "localhost",
    port: "3306",
    user: "root",
    password: "123456",
    database: "mydb"
});
mydb.connect();
// 跨域处理
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

app.get("/test", (req, res) => {
    let sql = `select * from student`
    mydb.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            return
        }
        res.send(result)

    })
});
//登录
app.post("/login", (req, res) => {
    // console.log(req.body);
    let sql = `select * from  user1 where username='${req.body.username}'`;
    mydb.query(sql, (err, result) => {
        // console.log(result)
        if (!result.length ) {
            res.send({
                code: 0,
                msg: "用户名不存在"
            })
        }
        else{
            if (result[0].username == req.body.username  && result[0].password == req.body.pwd) {
                res.send({
                    code: 2,
                    msg: "成功"
                })
    
            };
            if (result[0].password != req.body.pwd) {
                res.send({
                    code: 1,
                    msg: "密码错误"
                })
    
            };
        }





    })
});
// 注册
app.post("/resgiter",(req,res)=>{
    let sql = `select * from  user1 where username='${req.body.username}'`;
    mydb.query(sql, (err, result)=>{
        console.log(result)
        if (!result.length ) {
            let sql =`insert  into user1 (username,password) values ('${req.body.username}','${req.body.pwd}')`
            mydb.query(sql,(err,result)=>{
                console.log(result);
                if(result.affectedRows){
                    res.send({
                        code:0,
                        msg:"注册成功"

                    })
                }

            })

            
        }else{
            
            res.send({
                code: 1,
                msg: "用户名已存在"
            })
        }

    })
    

})
// app.use("/user",require("./controller/usercontroller"));
// app.use("/cake",require("./controller/cakecontroller"));

// app.use(express.static(__dirname+"/public"))
app.use(express.static(__dirname + "/public"));
app.listen("9999", () => {
    console.log("服务器运行在9999端口")
})
const mysql = require("mysql");

class UserModel {
    // 构造器   初始化数据库
    constructor() {
        console.log("userModel");
        this.mydb = mysql.createConnection({
            host: "localhost",
            port: "3306",
            user: "root",
            password: "123456",
            database: "mydb"
        });
        this.mydb.connect;

    }

    // 执行对应的sql语句，并使用回调进行逻辑处理
    //登录
    login(username, password, callback) {
        console.log(username, password);

        let sql = `select * from user where username='${username}'`;

        this.mydb.query(sql, callback);
    }

    //注册
    register(username, password, callback) {
        let sql = `insert into user(username, password) values(?,?)`;
        this.mydb.query(sql, [username, password], callback);
    }

    //修改密码
    changepwd(username, newpwd, callback) {
        let sql = `update user set password='${newpwd}' where username='${username}'`;

        this.mydb.query(sql, callback);
    }

}

module.exports = UserModel;
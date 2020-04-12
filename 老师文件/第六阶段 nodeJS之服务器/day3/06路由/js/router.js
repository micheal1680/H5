var read = require("./read")



module.exports = {
    login: function(filename, name, pwd, resp) {
        console.log("login...")
        let sql = `select * from user where username='${name}' and password='${pwd}'`;
        global.db.query(sql, function(err, result) {
            console.log(result);

            resp.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
            
            if(!result[0]) {
                console.log("if")
                resp.end( "用户名或密码错误")
            } else {
                resp.end( read.readHtml(filename) );
            }
        })

        // if(name == "abc" && pwd == "666") {
        //     return read.readHtml(filename);
        // } else {
        //     return "用户名或密码错误"
        // }
        
    },
    register: function(filename, name, pwd) {
        return read.readHtml(filename);
        
    },
    home: function(filename) {
        return read.readHtml(filename)
        
    }
}
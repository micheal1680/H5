const mysql = require("mysql");

class Database {
    constructor() {
        this.mydb = mysql.createConnection({
            host: "localhost",
            port: "3306",
            user: "root",
            password: "123456",
            database: "myapp"
        })
    }
}

module.exports = Database;
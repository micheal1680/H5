var read = require("./read")

module.exports = {
    login: function() {
        console.log("login...")
        return read.readHtml("login.html");
        
    },
    register: function() {
        return read.readHtml("register.html");
        
    },
    home: function() {
        return read.readHtml("home.html")
        
    }
}
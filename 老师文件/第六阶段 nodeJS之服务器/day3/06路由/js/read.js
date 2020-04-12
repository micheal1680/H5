var fs = require("fs");

module.exports = {
    readHtml: function(filename) {
        var data = fs.readFileSync(filename, "utf-8");
        return data;
    }
}
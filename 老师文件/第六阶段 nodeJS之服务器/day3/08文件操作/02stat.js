var fs = require("fs");

fs.stat("./file", function(err, stats) {
    if(err) {
        return console.error(err)
    }

    console.log(stats.isFile()); //false
    console.log(stats.isDirectory()); //true
})
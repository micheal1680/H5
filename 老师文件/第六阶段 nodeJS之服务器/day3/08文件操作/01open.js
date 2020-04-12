var fs = require("fs");

fs.open("./file/image6.jpg", "r+", function(err, fd) {
    if(err) {
        return console.error(err);
    }

    console.log("文件打开成功---" + fd);
})
var fs = require("fs");

var buf = Buffer.from("这是我要写入的数据");
var mode = {
    encoding: 'utf-8', 
    mode: 0666, 
    flag: 'a'
};
fs.writeFile("./file/input.txt", buf, mode, function(err) {
    if(err) {
        return console.error(err);
    }
    console.log("文件写入成功")

    fs.readFile("./file/input.txt", function(err, result) {
        if(err) {
            return console.error(err);
        }
        console.log("读取结果为：" + result);
    })
})
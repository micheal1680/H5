// 这是写入数据到流中

// 引入fs模块
const fs = require("fs");
var data = "这是我想要写入文件中的数据hahahah";

// 创建一个可写流对象，并指定文件路劲及名称（如果文件不存在，会自动新建），默认覆盖文件中的数据（如果不想覆盖，就加上{'flags': 'a'}，这样每次运行之后得到的数据会追加在之前的数据后面）
// {'flags': 'a'}表示在文件末尾追加内容，a表示append（追加）
var writeable = fs.createWriteStream("./file/output.txt", {'flags': 'a'});

// 将数据写入到文件中，并指定编码格式
writeable.write(data, "utf-8");

// 写入结束
writeable.end();

// finish事件表示写入完成
writeable.on("finish", function(){
    console.log("写入数据完成");
})

// 写入出错会触发（若有错，提醒出错，常用或多半都会用）
writeable.on("err", function(err) {
    console.log(err.stack);
});

console.log("程序执行完成");

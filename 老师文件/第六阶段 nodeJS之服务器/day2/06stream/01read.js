// 这是从流中读取数据

const fs = require("fs");
var data = "";

// 创建读流对象
var readable = fs.createReadStream("./file/input.txt");

// 设置编码格式
readable.setEncoding("utf-8");

// 文件中有数据可读时触发，参数表示读取到的数据
readable.on("data", function(result) {
    data += result;
});

// 读取到文件末尾时触发
readable.on("end", function() {
    console.log("读取到文件末尾" + data);
});

// 读取文件出错时触发
readable.on("err", function(err) {
    console.log(err.stack);
})

// 流：    根据流向：输入流和输出流
//         根据大小：字符流和字节流
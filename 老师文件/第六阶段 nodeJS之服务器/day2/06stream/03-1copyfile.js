// // 用copy这样的方法来复制文字等文件（文字采用的编码格式用utf-8）

const fs = require("fs");   //使用fs模块来实现（模块作用就是方法）
var data = "";

// 1.读取文件
var reader = fs.createReadStream("./file/input.txt");
// 创建一个可写入的流，写入数据到a.txt文件中
var writer = fs.createWriteStream("./file/a.txt");
// 设置编码格式（setEncoding）
reader.setEncoding("utf-8");
// 绑定data事件：文件中有数据可读时触发
reader.on("data", function (result) {
    console.log("result----" + result);
    data = result; //这里直接赋值，而不是追加
});
// 绑定end事件：读到文件末尾时触发
reader.on("end", function () {  //函数没有参数
    console.log("读取结束");
    setTimeout(function(){
        writer.write(data, "utf-8");
        writer.end();
    }, 10000)
        
})
// 绑定err事件：读取文件出错时触发
reader.on("err", function (err) {  //函数特殊参数err,  其中err.stack也是特有的
    console.log(err.stack);
})


writer.on("finish", function () {
    console.log("拷贝结束");
})
writer.on("err", function (err) {
    console.log(err.stack);
})


// 对于 “读取-写入”的操作，即“复制-粘贴”操作，是读取完成之后再进行写入，是阻塞的。
// 不能写为非阻塞状态，会造成读取和写入各自执行各自的，最后写入的只是空字符
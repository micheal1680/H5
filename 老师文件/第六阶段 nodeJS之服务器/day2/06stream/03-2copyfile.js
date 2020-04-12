// 用copyfile这样的方法来复制图片等大文件（图片采用的编码格式用base64）


const fs = require("fs");   //使用fs模块来实现（模块作用就是方法）

// 1.读取文件
var reader = fs.createReadStream("./file/a.jpg");
// 创建一个可写入的流，写入数据到a.txt文件中
var writer = fs.createWriteStream("./file/mm.jpg");
// 设置编码格式（setEncoding）
reader.setEncoding("base64");
// 绑定data事件：文件中有数据可读时触发
reader.on("data", function (result) {
   writer.write(result,"base64")
});
// 绑定end事件：读到文件末尾时触发
reader.on("end", function () {  //函数没有参数
    console.log("读取结束");
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


// 用这种方法存在一种情况：拷贝的文件太大，可能会造成阻塞时间过长，数据还没有读完就开始写了，导致数据残缺，造成文件无法打开
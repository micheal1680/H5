// 引入fs模块，用于读取文件
const fs = require("fs");   //fs:内置模块

console.log("您好，请点餐。。。。")

// 非阻塞读取文件内容，读取文件完成后，执行回调函数，
//回调函数的第一个参数表示执行失败，第二个参数表示读取的结果
fs.readFile("./input.txt", function(err, result) {  //非阻塞代码：fs.readFile("要读取的文件",回调函数)
    for(var i = 1000000000; i >= 0; i--);//i可以设置小一点，以免获取数据时间过长
    console.log("读取结果为：" + result)

    console.log("请稍等")
})

fs.readFile("./other.json", function(err, result){
    for(var i = 9999; i >= 0; i--);
    console.log("other文件内容是：" + result)
})

console.log("ninhao qingdiancan ")

// input.txt和other.json两个文件的读取相互独立，互不影响。它们也不影响主线程的执行
// 本文件有两个异步事件fs，一个读取input.txt，另外一个读取other.json
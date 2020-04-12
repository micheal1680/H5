// 引入fs模块，用于读取文件
const fs = require("fs");

console.log("您好，请点餐。。。。")

// 非阻塞读取文件内容，读取文件完成后，执行回调函数，
//回调函数的第一个参数表示执行失败，第二个参数表示读取的结果
fs.readFile("./input.txt", function(err, result) {
    setTimeout(function(){
        console.log("读取结果为：" + result)
    }, 10000)
    

    console.log("请稍等")
})

fs.readFile("./other.json", function(err, result){
    setTimeout(function(){
        console.log("other文件内容是：" + result)
    }, 5000)
})

console.log("ninhao qingdiancan ")

// 引入fs模块，用于读取文件
const fs = require("fs");

console.log("有个客户正在点餐，请稍后")
for(var i = 1000000000; i >= 0; i--); //耗时操作
var result = fs.readFileSync("./input.txt"); //阻塞代码，同步 （格式：fs.readFileSync("要读取的文件路径")）
console.log("用户点餐：" + result.toString());

console.log("用户点餐结束,下一位");

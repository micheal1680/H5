// path模块用于操作文件路径
var path = require("path");

console.log(path.resolve(__dirname)); //__dirname获取当前文件所在的绝对目录
console.log(path.resolve(__filename)); //__filename获取当前文件的绝对路径及文件名
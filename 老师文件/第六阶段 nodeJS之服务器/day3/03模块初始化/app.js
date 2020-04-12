// 无论模块导入多少次，只会初始化一次
var c1 = require("./js/count");
console.log(c1());//1
console.log(c1());//2

var c2 = require("./js/count");
console.log(c2());//3

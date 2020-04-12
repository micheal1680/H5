// 导入模块,使用了相对路径
var aa = require("./js/index");

// 使用模块中的函数
aa("hello");

// 导入模块，模块中是匿名函数
var bb = require("./js/noname");
bb();

// 导入字符串
var str = require("./js/string");
console.log(str);

// 导入数值
var num = require("./js/number");
console.log(num);

// 导入boolean值
var bool = require("./js/bool");
console.log(bool)

// 导入数组
var arr = require("./js/array");
console.log(arr.length)

// 导入对象
var obj = require("./js/object");
obj.showName();


// 在模块中可以通过module.exports导出字符串、数值、boolean值（true/false）、数组、对象



var more = require("./js/more")
more();

var em = require("./js/exportsmore");
em.a();
em.b();



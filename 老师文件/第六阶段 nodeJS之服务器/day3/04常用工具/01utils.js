
const util = require("util"); //找到内置模块

// isArray判断是否是一个数组，如果是，返回true
console.log(util.isArray([])); //true
console.log(util.isArray(new Array())); //true
console.log(util.isArray({})); //false

// isRegExp判断是不是一个正则表达式
console.log(util.isRegExp(/\+\-\*\/%/)); //true
console.log(util.isRegExp(new RegExp("123")));//true
console.log(util.isRegExp({})); //false

// isDate判读是不是一个时间对象
console.log(util.isDate(new Date())); // true
console.log(util.isDate(Date())); // false (without 'new' returns a String)
console.log(util.isDate({})); // false
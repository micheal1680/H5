var http = require("http"); //找到内置模块
// console.log(http)

// 没有给定文件后缀名，查找顺序：test.js  -> test.json  ->  test.node
var test = require("./js/test");
console.log(test);

//index为目录时，查找顺序： index/index.js  --> index/index.json
var test2 = require("./demo/index/");
console.log(test2);

// 没有相对路径，也不是核心模块，先到当前目录下的node_modules中查找，如果没有，到父目录的node_modules中找，
// 直到找到盘符，not Found
var mysql = require("mysql"); // 1908NodeJS/day3/01require/node_modules/mysql
console.log(mysql);

var express = require("express"); // 1908NodeJS/01require/node_modules
console.log(express);

// 在day3目录下用npm下载mysql,因此可以在day3目录下找到mysql的对象，比如创建连接对象createconnection 。可以通过node 01require.js可以查看
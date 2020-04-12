var buf1 = Buffer.from("百度一下");
var buf2 = Buffer.from("www.baidu.com");

// 合并缓冲区
var all = Buffer.concat([buf1, buf2]);
console.log(all.toString());
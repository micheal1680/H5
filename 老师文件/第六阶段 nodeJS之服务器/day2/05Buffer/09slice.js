var buf1 = Buffer.from("hello world");

// 根据起始下标和结束下标剪裁缓冲区  [a, b)
var result = buf1.slice(3,7);
console.log(result.toString())  //lo w

console.log(buf1.length); //11
console.log(result.length); //4
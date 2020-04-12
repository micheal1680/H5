// Buffer与字符编码
const buf = Buffer.from("hello", "ascii");//ascii就是ASCII编码

console.log(buf.toString('hex'));//十六进制编码

console.log(buf.toString("base64"));  //Base64编码




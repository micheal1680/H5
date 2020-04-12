// 对于要将一个文件从一个位置复制到另一个位置，特别是大文件的时候，使用pipe管道流的方法。
const fs = require("fs");

var reader = fs.createReadStream("./file/image6.jpg");

var writer = fs.createWriteStream("./file/a.jpg");

// pipe管道流
//将read到的数据通过管道pipe输出到writer中（相当于实现文件的复制）
reader.pipe(writer);

// 这个方法更加高效，03copyfile的方法可能只适合复制小文件
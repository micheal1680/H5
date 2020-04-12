// 1.压缩文件
const fs = require("fs");
const zlib = require("zlib");
// 压缩 image6.jpg 文件为 b.jpg.gz（.gz是压缩文件的后缀名，之所以前面还有一个.jpg是为了能解压之后能看到图片）
var reader = fs.createReadStream("./file/image6.jpg");
var writer = fs.createWriteStream("./file/b.jpg.gz");
var zip = zlib.createGzip();   //压缩关键字：createGzip
// 整个过程：读取文件之后通过管道流pipe流到对象zip中，再从zip通过管道流pipe流到writer，从而写入压缩文件
reader
    .pipe(zip)
    .pipe(writer);



// 2.解压文件
var fs=require("fs");
var zlib=require("zlib");
// 解压 b.jpg.gz 文件为 mytp.jpg  （需知：压缩时，被压缩的文件必须是已经存在的；解压时，被解压的文件必须得是已经存在的压缩文件）
var read=fs.createReadStream("./file/b.jpg.gz");
var write=fs.createWriteStream("./file/mytp.jpg");
var zip1=zlib.createGunzip();  //解压关键字:createGunzip

read
.pipe(zip1)
.pipe(write);


// 链式流：上一级的输出作为下一级的输入，再依次
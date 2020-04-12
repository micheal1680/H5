// Buffer.alloc(size[, fill[, encoding]])
//size表示大小，fill表示默认填充值，encoding表示编码方式
var buf1 = Buffer.alloc(10);  //没有写fill是什么，就默认用0来填充
console.log(buf1);

var buf2 = Buffer.alloc(16, "好", "utf-8"); //一个汉字（中文版字符）占2个字节，一个英文字符占一个字节
console.log(buf2.toString());   //tostring方法是将数据显示出来

var buf3 = Buffer.from([1,2,3]);
console.log(buf3);  //<Buffer 0x01 0x02 0x03>   用buffer.from得到的是十六进制的数据

var buf4 = Buffer.from("test");
console.log(buf4); //<Buffer 0x74 0x65 0x73 0x74>



//创建buffer，有两个方法。1.buffer.alloc：开辟一个空间
                        //  2.buffer.from:指定输入的数据



                    
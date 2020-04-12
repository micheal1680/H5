var buf1 = Buffer.alloc(10, 1);
console.log(buf1); //<Buffer 01 01 01 01 01 01 01 01 01 01>

var buf2 = Buffer.allocUnsafe(10);
console.log(buf2);


var buf3 = Buffer.alloc(20);
console.log(buf3.length); //20
var len3 = buf3.write("hello");
console.log(len3);//5


var buf4 = Buffer.alloc(10);
var len4 = buf4.write("apple banana orange");
console.log(len4);  //10
console.log(buf4);  //<Buffer 61 70 70 6c 65 20 62 61 6e 61>
console.log(buf4.toString())   //apple bana

var buf5 = Buffer.alloc(10);
var len5 = buf5.write("apple banana orange", 5);
console.log(len5); //5
console.log(buf5); //<Buffer 00 00 00 00 00 61 70 70 6c 65>

var buf6 = Buffer.alloc(10);
var len6 = buf6.write("apple", 2, 3);//从buf6下标为2的位置开始写数据，写入3个数据
console.log(len6);//3
console.log(buf6);//<Buffer 00 00 61 70 70 00 00 00 00 00>
console.log(buf6.toString())//app
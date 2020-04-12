 var buf1 = Buffer.from("abcdefghijk");
 var buf2 = Buffer.from("APPLE");

//  将buf2中的数据拷贝到buf1中，并且在buf1指定下标开始拷贝,会覆盖原先的数据
buf2.copy(buf1, 2);
console.log(buf1.toString()); //abAPPLEhijk

 var buf3 = Buffer.from("abcdefg");
 var buf4 = Buffer.from("ABCDEFG");
//  源数组.copy(目标数组, 目标数组的起始下标, 源数组的起始下标, 源数组的结束下标)
 buf4.copy(buf3, 2, 1, 3)  //源数组的起始下标, 源数组的结束下标即1，3是左闭右开。
 console.log(buf3.toString());  //abBCefg

//  在buffer中，大多区间都是左闭右开
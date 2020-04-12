var buf1 = Buffer.from("abce");
var buf2 = Buffer.from("abcd");

// 按照字母顺序比较
var num = buf1.compare(buf2);    //num：正值时表示为1；负值时表示为-1；相同表示为0
if(num < 0) {
    console.log("buf1位于前面")
} else if(num == 0) {
    console.log("一样的 ")
} else {
    console.log("buf1位于后面")
}

// 汉字在unicode编码表中的取值范围是：\u4e00~\u9fa5
var buf3 = Buffer.from("一"); //一的位置是\u4e00 --> 19968
var buf4 = Buffer.from("四"); //四的位置是\u56db --> 22235
// 可以使用编码转换网站来对中文进行转换为Unicode编码,来比较
// 使用汉字在编码表中的位置来比较
var num = buf3.compare(buf4);
console.log(num); //-1
// 打印26个字母（大写）
var buf1 = Buffer.alloc(26);
for(var i = 0; i < 26; i++) {
    buf1[i] = i + 65;  //ASCII编码中65代表字母A （若想打印26位小写字母，则65换成97）
}
console.log(buf1.toString()); //ABCDEFGHIJKLMNOPQRSTUVWXYZ

// 取出buf1中下标从0开始到9的数据   [a, b)   a <= x < b
console.log(buf1.toString("utf-8", 0, 10))

//取出buf1中下标从5开始到结束的数据
console.log(buf1.toString("utf-8", 5)); 

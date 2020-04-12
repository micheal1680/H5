var data = `{"name": "小明", "sex": "男", "age": 18}`;
var xx = JSON.parse(data); //将String类型转为json类型
console.log(typeof data); //string
console.log(typeof xx); //object

var obj = {
    bookName: "水浒传",
    author: "施耐庵",
    price: 56.5
}
var yy = JSON.stringify(obj); //将json对象转为字符串
console.log(typeof obj); //object
console.log(typeof yy); //string


var buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
var json = JSON.stringify(buf); //将Buffer对象转为json字符串
console.log(json) //{"type":"Buffer","data":[1,2,3,4,5]}
console.log(typeof json) //string


var buf2 = Buffer.from([0x65, 0x66, 0x67]);  //Buffer.from里面的数据都是十六进制
var json2 = buf2.toJSON(); //将Buffer对象转为JSON对象
console.log(json2)   //{ type: 'Buffer', data: [ 101, 102, 103 ] }
console.log(typeof json2) //object

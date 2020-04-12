//function show(response) {
//	console.log("show....");
//	response.write("这是外部函数")
//}
//module.exports = show;

//导出一个匿名函数
module.exports = function(response) {
	console.log("show....");
	response.write("这是外部函数")
}

// 两种写法等效
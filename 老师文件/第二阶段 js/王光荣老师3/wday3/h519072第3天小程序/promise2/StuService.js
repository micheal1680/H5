//cb是接收到了一个带参数的函数
function getStuInf(cb) {
	
	window.setTimeout(function(){
		let str = "这是好学生";
		cb(str);//调用cb函数，并传参str;
	}, 5000);
	
}
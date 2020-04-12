//cb是接收到了一个带参数的函数
function getStuInf() {
	
	let p = new Promise(function(resolve, reject){
		//子线程
		window.setTimeout(function(){
			console.log("开始获取数据...")
			let stu = {name:'小明', age:30, sex:"女"};//子线程中获取的数据
			resolve(stu);
		}, 5000);
	});
	
	return p;
}
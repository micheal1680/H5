class StuService {
	constructor() {
	}
	getStuInf() {
		//p接收到了一个Promise对象
		let p = new Promise(function(resolve, reject){
			window.setTimeout(function(){
				console.log("开始获取数据...")
				let stu = {name:'小明', age:30, sex:"女"};//子线程中获取的数据
				resolve(stu);
			}, 5000);
		});
		return p;
	}
}
 
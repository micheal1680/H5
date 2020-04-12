function show() {
	//得到一个Promise对象
	let p = getStuInf();
	console.log(p);
	//监听resolve(str);  str-->value
	p.then(function(value){
		console.log(value);
		let box = document.getElementById("box");
		box.innerHTML = value.name+":"+value.age+":"+value.sex;
	})
}

// Promise {<pending>}
// 开始获取数据...
// 这是好学生
// promise有三种状态：pending（运行中）、fulfilled（已成功）、rejected(已失败)
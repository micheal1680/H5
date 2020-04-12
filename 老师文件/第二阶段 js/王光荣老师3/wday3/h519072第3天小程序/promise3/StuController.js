function show() {
	//得到一个Promise对象
	let p = getStuInf(); //调用getStuInf()函数
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

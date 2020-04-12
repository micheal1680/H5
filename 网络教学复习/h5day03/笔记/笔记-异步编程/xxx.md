# **一.promise中resolve的使用**

```js
class Service{
		constructor() {
				    
		}
		getUser() {
			const p = new Promise(function(resolve, reject){
			        setTimeout(function(){
				       resolve({name:"小明", age:30});
			        }, 5000)
			});
			return p; 
		}
}
//当上面的resolve();函数执行后,下面的p.then(函数)中的函数才会被执行。
		
class Controller {
		constructor() {
			this.s1 = new Service();
		}
		showUser() {
			let p = this.s1.getUser();
			p.then(function(v){
				console.log(v);
			})
		}
}

let c1 = new Controller();
c1.showUser();
console.log("得到User")
```

**执行结果为**




















































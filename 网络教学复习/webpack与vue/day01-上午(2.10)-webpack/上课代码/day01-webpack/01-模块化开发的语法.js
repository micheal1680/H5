
var student={
	name:"陈俊雄",
	duty:"学习委员"
}

// export default 只能用一次,后边可以直接跟一个值或者是跟一个表达式
// export default student;
export default 123;

// export 直接跟变量声明表达式,或者跟一个对象
// export var num1=100,num2=200;
var num1=100,num2=200;
export {num1,num2};
export function sayHello(){
	console.log("hello world")
}

// module.exports={
// 	
// }
// exports.num1=100;
// exports.fn=function(){
// 	
// }
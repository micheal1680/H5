// 把函数最为参数的函数
function exec(someFunc, values) {
    someFunc(values);
}

// 执行exec函数，并传参
// 对于values的传参：首先将"你好啊"传给exec的values，再将其传给data
exec(function(data){
    console.log(data);
}, "你好啊");


// 定时器 也相当于是用函数作为参数，1000传入之后，通过内部操作，每隔1s钟打印一个1
setTimeout(function(){
    console.log("1")
}, 1000)
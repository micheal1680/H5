const events = require("events");

const emitter = new events.EventEmitter();

// 同一个事件绑定了多个监听器，在每个监听器中可以完成不同的操作
emitter.on("change", function(arg1, arg2, arg3){ // arg3没有传值，为undefined
    console.log("监听器1---" + (arg1 + arg2 + arg3)); //150 + undefined = NaN
})

emitter.on("change", function(arg1, arg2){
    console.log("监听器2----" + (arg1 - arg2)); //50
})

// 触发事件，参数1表示事件名称，后面的参数表示事件函数的参数值
emitter.emit("change", 100, 50);  //emitter.emit("change", "参数1", "参数2"); -->触发有参数的回调函数的事件，这就是传参格式


//需知:
// 一个事件可以有多个监听器（listener）;
// function ( a1,a2,a3 ) {}:函数的()里面写了参量，就是对参量的声明，若后面没有进行传参，相当于只声明，没赋值，则返回undefined ，一个常量如15 + undefined= NaN
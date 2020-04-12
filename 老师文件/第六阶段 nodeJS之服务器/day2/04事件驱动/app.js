// 引入events模块，用于绑定事件操作
const events = require("events");

// 创建事件对象
const emitter = new events.EventEmitter();

//定义需要执行的回调函数
function show() {
    console.log("show...");
}

//1.绑定change事件,参数1表示自定义事件名称，参数2表示该事件触发时执行的回调函数
// // 在这个对象上绑定一个change事件，一个事件对应一个回调函数（通过on绑定事件，on的作用：绑定事件，监听事件）
emitter.on("change", show)    //on:用于绑定事件、监听事件

//2.触发change函数执行
emitter.emit("change");    //emit:用于触发事件



// mybtn.onclick = function(){}    //这个function就是事件触发的回调函数

// 用定时器来写，将代码优化
const events = require("events");

const emitter = new events.EventEmitter();

// 绑定some_event事件，参数2是事件被触发时的回调函数
emitter.on("some_event", function(){
    console.log("some_event事件已被触发执行");
})

// 3s之后触发some_event事件执行
setTimeout(function(){
    emitter.emit("some_event")
}, 3000);      //setTimeout（回调函数，时间）
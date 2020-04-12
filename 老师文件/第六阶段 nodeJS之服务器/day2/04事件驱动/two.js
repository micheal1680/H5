// 引入events模块
const events = require("events");

// 创建事件对象
const emitter = new events.EventEmitter();

// 绑定one、two事件，（这里绑定2个事件，对应就得有2个回调函数）one事件被触发时，执行oneMethod回调函数，two事件被触发时，执行twoMethod回调函数
emitter.on("one", oneMethod);
emitter.on("two", twoMethod);

// 定义oneMethod回电函数
function oneMethod() {
    console.log("one...");

    // 触发two事件函数执行
    emitter.emit("two");
}

// 定义twoMethod回调函数
function twoMethod() {
    console.log("two...")
}

// 触发one事件函数执行
emitter.emit("one");

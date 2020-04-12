function a() {
    console.log("a");
}
module.exports = a;

function b() {
    console.log("b");
}
module.exports = b;

// 当使用多个module.exports导出变量时，后面的值会覆盖之前的
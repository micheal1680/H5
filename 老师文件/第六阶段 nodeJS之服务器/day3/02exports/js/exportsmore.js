exports.a = function() {
    console.log("aaaaaaaa")
}
exports.b = function() {
    console.log("bbbbbbbbbbb");
}

// 使用exports导出多个对象（这样可以用exports导出多个函数，或者用对象来封装多个函数再来导出该对象同样也可以）

// 若用两个module.exports来导出这两个函数，那么最终也只能使一个生效，即最后几个，因为会覆盖。
// 实际上就是只能有一个exports。因此采用该文件中的方法可以用一个exports实现导出多个函数


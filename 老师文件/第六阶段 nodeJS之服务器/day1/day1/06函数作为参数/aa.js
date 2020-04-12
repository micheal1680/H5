// 把多个函数作为参数
function show(myfunc1, myfunc2) {
    myfunc1();
    myfunc2();

}


show(function(){
    console.log("xxxx");
}, function(){
    console.log("yyyy")
})
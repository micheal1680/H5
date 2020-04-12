function show() {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log("xxxxx");
            var num = Math.floor(Math.random()*10)
            console.log("num-----" + num)
            if(num > 5) {
                resolve("执行成功, num > 5")
            } else {
                reject("执行失败， num <= 5")
            }
        }, 2000)
    })
}

var p = show();

p.then(data => { //then执行resolve返回的数据
    console.log(data)
}).catch(data => { //catch执行reject返回的数据
    console.log(data)
})
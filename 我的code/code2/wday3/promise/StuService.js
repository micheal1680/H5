function getStuInf() {
    let p=new Promise(function(resolve,reject){
        // 该Promise是浏览器自带的，不是自己创建的，是本来就有的
        window.setTimeout(function(){
            console.log("开始获取数据...")
            let stu={name:'小敏',age:30,sex:'男'};
            resolve(stu);
        },5000);
    })
    return p;
}
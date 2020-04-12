function show(){
    let p=getStuInf();   //调用getStuInf()函数
    console.log(p);
    p.then(function(value){
        console.log(value);
        let box=document.getElementById("box");
        box.innerHTML=value.name+":"+value.age+":"+value.sex;
    })
}
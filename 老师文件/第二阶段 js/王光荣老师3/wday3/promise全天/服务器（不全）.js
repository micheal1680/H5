// 得到一个访问服务器的对象
let xmlhttp=new XMLHttpRequest();
//监听对服务器的访问
xmlhttp.onreadystatechange=function(){
    if(xmlhttp.readyState==4&&xmlhttp.status==200){//成功，此处执行了四次所得到的值xmlhttp.readyState、xmlhttp.status分别是：
        // 1、100 ；2、200；3、200；4、200 。因此取最后一次的值为判断标准，满足则成功
        let data=xmlhttp.responseText;//得到服务器返回的数据
        resolve(data);//成功得到服务器数据  （这是将从服务器获得的数据传出去的方法）
    }else if(xmlhttp.readyState==4&& xmlhttp.status==404){//失败  404表示彻底失败
        reject("服务器正在维护中...")
    }
};
// 设置访问服务器的路径等信息
xmlhttp.open("GET","http://192.168.1.123:9999/getStddr.do",true);
// 向服务器发出访问，这是一个子线程，即是一个异步操作
xmlhttp.send();
  
Promise.then(function(v){
    let mydiv=document.querySelector("#mydiv");
    mydiv.innerHTML=v;
}).catch(function(v){
    let mydiv=document.querySelector("#mydiv");
    mydiv.innerHTML=v;
});      //若成功即resolve，则自动执行then；若失败即reject，则自动执行catch。总之若执行了then，就不会执行catch


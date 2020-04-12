(function () {
    // 获取表单元素
    var form = layui.form;

    var imgUrl = "";

    // d调用函数得到一个Promise对象，在该Promise对象中上传了文件
    var p = uploadFile()
    p.then(data => { //then处理resolve
        imgUrl = data; //将resolve中返回的图片地址赋值给imgUrl变量
    }).catch(data => { //catch处理reject
        console.log(data);
    })

    //监听提交  添加商品
    document.querySelector(".layui-form") && form.on('submit(formAdd)', function (data) {
        
        // data.field表示表单中所有元素的值，是一个json对象
        var product = data.field;
        console.log(JSON.stringify(product));

        // 为图片存放上传回来的地址
        product.file = imgUrl;

        console.log(JSON.stringify(product))

        // 发送请求添加商品
        $.post("http://localhost:3000/cake/add", product, function(data) {
            if(data.code == 0) {
                layer.msg("添加商品成功");
            } else {
                layer.msg("添加商品失败");
            }
            console.log(data)
            // window.location.href = "../html/AddProduct.html";
        })

        return false;
    });

    

})()
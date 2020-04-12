(function () {
    // 获取表单元素
    var form = layui.form;

    // 获取upload对象，进行文件上传
    var upload = layui.upload;

    var imgUrl = "";

    // 上传图片到服务器保存，并且返回图片在服务器中存放的网络请求地址
    document.querySelector("#uploadPicture") && upload.render({
        elem: '#uploadPicture' //绑定元素
        , url: 'http://localhost:3000/cake/upload' //上传接口
        , done: function (res) {
            //上传完毕回调
            console.log(res);
            imgUrl = res.data.src; //保存图片地址
            layer.msg("上传成功")
        }
        , error: function () {
            //请求异常回调
        }
        , drag: true
    });

    //监听提交  添加商品
    document.querySelector(".layui-form") && form.on('submit(formAdd)', function (data) {
        layer.msg("添加商品成功");
        // data.field表示表单中所有元素的值，是一个json对象
        var product = data.field;
        console.log(JSON.stringify(product));

        // 为图片存放上传回来的地址
        product.file = imgUrl;

        console.log(JSON.stringify(product))

        // 发送请求添加商品
        $.post("http://localhost:3000/cake/add", product, function(data) {
            console.log("成功添加数据")
            console.log(data)
            // window.location.href = "../html/AddProduct.html";
        })

        return false;
    });

    

})()
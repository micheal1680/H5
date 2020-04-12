(function () {
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

})()
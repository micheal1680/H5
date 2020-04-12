(function () {
    var form = layui.form;





    // 定义一个空对象，用于保存传递过来的参数信息
    var paramsObj = {};

    // 获得通过window.location.href 传递的参数信息
    var params = location.search;
    // 取出参数前面的?
    params = params.substr(1);
    // 通过&拆分参数， 得到的每一个元素都是键值对
    paramsArray = params.split("&");
    // 遍历数组，再通过=拆分键值对
    for (var i = 0; i < paramsArray.length; i++) {
        var item = paramsArray[i].split("="); //通过=拆分键值对
        // item[0]  -->键名
        // item[1]  -->值
        // paramsObj['key'] = value;
        // 将键与值添加到对象中   decodeURI 解码中文
        paramsObj[`${item[0]}`] = decodeURI(item[1]);
    }
    console.log("obj---" + JSON.stringify(paramsObj));

    // 0 -0 false "" [] {} undefined null --->false
    if (paramsObj) {
        // 将原数据显示在页面中
        document.querySelector("input[name='name']").value = paramsObj.name;
        document.querySelector("input[name='oldprice']").value = paramsObj.oldprice;
        document.querySelector("input[name='newprice']").value = paramsObj.newprice;
        document.querySelector("select[name='type']").value = paramsObj.type;
        document.querySelector("input[name='activity']").value = paramsObj.activity;
        document.querySelector("textarea[name='description']").value = paramsObj.description;
    }

    var imgUrl = "";

    var p = uploadFile();
    p.then(data => {
        imgUrl = data;
    }).catch(data => {
        console.log(data);
    })



    // 表单提交
    document.querySelector(".layui-form") && form.on('submit(formChange)', function (data) {
        var product = data.field;

        product.file = imgUrl;
        product['id'] = paramsObj.id;

        console.log("product----" + JSON.stringify(product));

        $.post("http://localhost:3000/cake/change", product, function (data) {
            if (data.code == 0) {
                layer.msg("数据修改成功");
            } else {
                layer.msg("数据修改失败");
            }
            console.log(data);
        })





        return false;
    })

})()
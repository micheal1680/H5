(function () {
    console.log("table...")

    // 获得layui中的table对象 获得对象后可以使用render函数渲染数据
    var table = layui.table;
    console.log("sessionStorage-----" + sessionStorage.getItem("aid"));
    if (sessionStorage.getItem("aid")) {
        // 使用表格展示数据
        document.querySelector("#catelist") && table.render({
            elem: '#catelist'
            , height: 500
            , url: 'http://localhost:3000/cloth/list' //数据接口
            , page: true //开启分页
            , cols: [[ //表头
                { field: 'id', title: 'ID', width: 80, sort: true, fixed: 'left' }
                , { field: 'name', title: '商品名称', width: 150 }
                , { field: 'oldprice', title: '原价', width: 80, sort: true }
                , { field: 'newprice', title: '现价', width: 80 }
                , { field: 'stock', title: '库存', width: 177 }
                , { field: 'description', title: '描述', width: 300, sort: true }
                , { field: 'catename', title: '分类', width: 150 }
                , { field: 'operation', title: '操作', width: 150, toolbar: '#toolbarDesc', edit: 'text' }
            ]],
            limit: 10
        });
    } else {
        alert("未登录状态，5秒后跳转到登录页面")
        setTimeout(() => {
            window.location.href = "../html/login.html"
        }, 5000)
    }

    // 对表格进行监听   cartoontable表示lay-filter的属性值
    table.on("tool(cartoontable)", function (obj) {
        var data = obj.data; //获得当前行数据

        var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）


        if (layEvent === 'del') { //删除  根据商品id删除记录  data.id
            layer.confirm('真的删除行么', function (index) {
                // ajax请求删除记录
                $.post("http://localhost:3000/cloth/del", {
                    id: data.id
                }, function (data) {
                    console.log("删除成功----" + data);
                })

                obj.del(); //删除对应行（tr）的DOM结构，并更新缓存
                layer.close(index);
                //向服务端发送删除指令
            });
        } else if (layEvent === 'edit') { //编辑
            // window.location.href在进行参数传递时，中文参数会出现乱码，
            // 此时通过encodeURI将中文参数进行转码，
            // 到目标页面通过decodeURI对中文参数进行解码
            console.log("data----" + JSON.stringify(data));

            // encodeURI 转码中文
            var params = `id=${data.id}&name=${data.name}&oldprice=${data.oldprice}&newprice=${data.newprice}&description=${data.description}&picture=${data.picture}&type=${data.type}&stock=${data.stock}`;
            // var params = `id=${data.id}&name=${encodeURI(data.name)}&oldprice=${data.oldprice}&newprice=${data.newprice}&description=${encodeURI(data.description)}&picture=${data.picture}&type=${data.type}&activity=${encodeURI(data.activity)}`;
            console.log(params);


            //跳转到编辑页面
            window.location.href = "../html/ChangeProduct.html?" + params;
        }
    })



})()
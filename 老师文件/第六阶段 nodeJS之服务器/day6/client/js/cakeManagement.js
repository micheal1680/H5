(function() {

    console.log("table...")

    // 获得layui中的table对象 获得对象后可以使用render函数渲染数据
    var table = layui.table;
    console.log(table)

    document.querySelector("#catelist") && table.render({
        elem: '#catelist'
        ,height: 500
        ,url: 'http://localhost:3000/cake/list' //数据接口
        ,page: true //开启分页
        ,cols: [[ //表头
          {field: 'id', title: 'ID', width:80, sort: true, fixed: 'left'}
          ,{field: 'name', title: '商品名称', width:150}
          ,{field: 'oldprice', title: '原价', width:80, sort: true}
          ,{field: 'newprice', title: '现价', width:80} 
          ,{field: 'activity', title: '活动', width: 177}
          ,{field: 'description', title: '描述', width: 300, sort: true}
          ,{field: 'operation',title: '操作', width: 150, toolbar: '#toolbarDesc', edit: 'text'}
        ]],
        limit: 10
    });

    // 对表格进行监听   cartoontable表示lay-filter的属性值
    table.on("tool(cartoontable)", function(obj) {
        var data = obj.data; //获得当前行数据
        
        var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
       
       
        if(layEvent === 'del'){ //删除  根据商品id删除记录  data.id
          layer.confirm('真的删除行么', function(index){
            // ajax请求删除记录
            $.ajax({
                url: `http://localhost:3000/cake/del?id=${data.id}`,
                type: "GET",
                success: function(results) {
                    console.log("删除成功----" + results)
                },
                error: function(err) {
                    console.log(err);
                }
            })

            obj.del(); //删除对应行（tr）的DOM结构，并更新缓存
            layer.close(index);
            //向服务端发送删除指令
          });
        } else if(layEvent === 'edit'){ //编辑
          //do something
          
          
          //同步更新缓存对应的值
          // obj.update({
          //   username: '123'
          //   ,title: 'xxx'
          // });
        } 
    })
})()
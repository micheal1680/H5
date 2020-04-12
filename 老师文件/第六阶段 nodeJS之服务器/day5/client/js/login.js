// 找到button按钮，设置监听
document.querySelector("#login").onclick = function () {
    let name = document.querySelector(".login>input[type='text']").value;
    let pwd = document.querySelector(".login>input[type='password']").value;

    $.ajax({
        url: `http://localhost:3000/user/login?username=${name}&password=${pwd}`,
        type: "GET",
        success: function(data) {
            console.log(data)
            if(data.code == -1) {
                alert("用户不存在")
            }

            if(data.code == 0) {
                alert("密码错误")
            }

            if(data.code == 1) {
                alert("登录成功")
                window.location.href = "./index.html"
            }
        },
        error: function(err) {
            console.log(err)
        }
    })
}
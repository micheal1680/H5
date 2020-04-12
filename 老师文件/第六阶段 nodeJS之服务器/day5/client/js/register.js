document.querySelector("#register").onclick = function () {
    let name = document.querySelector(".register>input[type='text']").value;
    let pwd = document.querySelector(".register>input[type='password']").value;
    let again = document.querySelector(".register>.again").value;

    if (name == null || name == "") {
        alert("用户名不能为空")
        return;
    }

    if (pwd == again) {

        $.ajax({
            url: `http://localhost:3000/user/register?username=${name}&password=${pwd}`,
            type: "GET",
            success: function(data) {
                console.log(data);
            },
            error: function(err) {
                console.log(err)
            }
        })
        
    } else {
        alert("两次密码输入不一致")
        return;
    }

}
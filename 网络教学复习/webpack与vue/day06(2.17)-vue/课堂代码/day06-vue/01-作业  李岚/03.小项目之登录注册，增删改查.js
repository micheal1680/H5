import Vue from "vue"
import axios from 'axios'

var vm = new Vue({
    el: "#app",
    data: {
        isShow:'loginPage',
        userName:'',
        passWord:'',
        msg: "登录成功后显示的页面",
        afterModifyUser:'',
        afterModifyPassW:'',
        id:''
    },
    methods: {
        // 登录
        handleLogin(){
            if(this.userName.length<6){
                alert("用户名需要大于6位！");
                return;
            }
            if(!(/^(?=.*[a-zA-Z]+)(?=.*\d+)(?=.*[_]+).{6,16}$/igm).test(this.passWord)){
                alert("密码在6~16位，包括数字、字母、下划线，请重新输入！");
                return;
            }
            axios.get('http://localhost:8888/user', {
                params: {
                  username: this.userName,
                  password: this.passWord
                }
              })
              .then( (response)=> {
                console.log(response.data);
                if(response.data.status == 0){
                  alert(response.data.msg);
                  this.isShow='listPage';

                  // 查询所有用户信息
                  axios.get('http://localhost:8888/list')
                  .then((response)=> {
                    console.log(response.data);
                    this.msg=response.data
                  })
                  .catch((error)=> {
                    console.log(error);
                  })
                  .then( ()=> {
                  });




                }else {
                  alert(response.data.msg)
                }
              })
              .catch( (error)=>{
                console.log(error);
              })
              .then(function () {
              });  
        },
        // 注册
        handleRegist(){
          if(this.userName.length<6){
            alert("用户名需要大于6位！");
            return;
          }
          if(!(/^(?=.*[a-zA-Z]+)(?=.*\d+)(?=.*[_]+).{6,16}$/igm).test(this.passWord)){
              alert("密码在6~16位，包括数字、字母、下划线，请重新输入！");
              return;
          }
          axios.post('http://localhost:8888/regist', {
            username: this.userName,
            password: this.passWord
          })
          .then((response) => {
            console.log(response.data);
            if(response.data.status == 0){
              alert(response.data.msg);
              this.passWord='';
              this.userName='';
            }else {
              alert(response.data.msg);
            }

          })
          .catch((error)=> {
            console.log(error);
          });
        },
        // 删除用户
        deleteUser(id){
          console.log(id);
          axios.get('http://localhost:8888/delete', {
            params: {
              ID: id
            }
          })
          .then( (response)=> {
            console.log(response.data);
            if(response.data.status == 0){
              alert(response.data.msg);
               // 查询所有用户信息
               axios.get('http://localhost:8888/list')
               .then((response)=> {
                 console.log(response.data);
                 this.msg=response.data
               })
               .catch((error)=> {
                 console.log(error);
               })
               .then( ()=> {
               });
            }else{
              alert(response.data.msg);
            }
          })
          .catch( (error)=> {
            console.log(error);
          })
          .then( ()=> {
          });
        },
        // 修改用户
        modifyUser(id,username,password){
          this.isShow='modifyPage';
          this.afterModifyUser=username;
          this.afterModifyPassW=password;
          this.id=id;
        },
        // 修改用户相关信息，点击提交
        finishModify(){
          if(this.afterModifyUser.length<6){
            alert("用户名需要大于6位！");
            return;
          }
          if(!(/^(?=.*[a-zA-Z]+)(?=.*\d+)(?=.*[_]+).{6,16}$/igm).test(this.afterModifyPassW)){
              alert("密码在6~16位，包括数字、字母、下划线，请重新输入！");
              return;
          }

          axios.post('http://localhost:8888/modify', {
            userId: this.id,
            username: this.afterModifyUser,
            password: this.afterModifyPassW
          })
          .then( (response)=> {
            console.log(response.data);
            if(response.data.status == 0){
              alert(response.data.msg);
              this.isShow='listPage';
                // 查询所有用户信息
                axios.get('http://localhost:8888/list')
                .then((response)=> {
                  console.log(response.data);
                  this.msg=response.data
                })
                .catch((error)=> {
                  console.log(error);
                })
                .then( ()=> {
                });
            }else{
              alert(response.data.msg);
            }

          })
          .catch( (error)=> {
            console.log(error);
          });


        }



    }
})

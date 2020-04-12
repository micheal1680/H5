'use strict';

const Service=require('egg').Service;
class AdminService extends Service {
    async login(username){
        const {app} = this;
        let result = await app.mysql.get('user',{username});
        return result;
      }
      
      async getdata(){
        const {app} = this;
        let result = await app.mysql.select('user');
        return result;
      }

      async add(formData){
        const {app} = this;
        let result = await app.mysql.insert('user',{username:formData.username,passwd:formData.password});
        return result;
      }

      async del(uid){
        const {app} = this;
        let result = await app.mysql.delete('user',{uid:uid});
        console.log(result)
        return result;
      }

      async updata(formData){
        const {app} = this;
        let result = await app.mysql.update('user',{username:formData.username,passwd:formData.password,uid:formData.uid},{
            where: {
              uid: formData.uid
            }
          });
        console.log(result)
        return result;
      }

      async select(formData){
        const {app} = this;
        let result = await app.mysql.select('user',{
            where: {
              username: formData.username
            }
          });
        console.log(result)
        return result;
      }
  }

  module.exports = AdminService;
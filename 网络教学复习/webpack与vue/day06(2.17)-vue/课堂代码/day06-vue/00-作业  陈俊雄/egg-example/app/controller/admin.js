'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
 
    async login() {
        const { ctx, service } = this;
        let formData = ctx.request.query;
        console.log( ctx.request.query)
        let result = await service.admin.login(formData.username);
        let data = { code: 1, Msg: '登录成功' };
        // 账号不存在
        if (!result) {
            data = { code: -1, Msg: '账号不存在' };
        }
        // 密码错误
        if (result && result.passwd != formData.password) {
            data = { code: 0, Msg: '密码错误' };
        }
        ctx.body = data;

    }

    async getdata(){
        const { ctx, service } = this;
        let result = await service.admin.getdata();
        ctx.body={
            code:1,
            result:result
        }
    }

    async add(){
        const { ctx, service } = this;
        let formData = ctx.request.query;
        let result = await service.admin.add(formData);
        let data = {code:1, Msg:'操作成功'};
        if(!result.insertId){
            data = {code:-1, Msg:'操作失败'};
        }
        ctx.response.body = data;
    }
    async del(){
        const { ctx, service } = this;
        let uid = ctx.request.query;
        console.log(uid)
        let result = await service.admin.del(uid.uid);
        let data = {code:1, Msg:'操作成功'};
        ctx.response.body = data;
    }

    async updata(){
        const { ctx, service } = this;
        let formData = ctx.request.query;
        let result = await service.admin.updata(formData);
        let data = {code:1, Msg:'操作成功'};
        ctx.response.body = data;
    }
    async select(){
        const { ctx, service } = this;
        let formData = ctx.request.query;
        let result = await service.admin.select(formData);
        ctx.body={
            code:1,
            result:result
        }
    }
   
}

module.exports = AdminController;

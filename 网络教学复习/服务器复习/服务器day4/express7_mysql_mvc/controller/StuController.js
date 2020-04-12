const StuModel = require('../model/StuModel.js')
class StuController {
	constructor() {
	    this.stuModel = new StuModel();
	}
	showStuByClazzId(req, res) {
		let clazzId = req.body.clazzId;
		this.stuModel.query(clazzId, function(r){
			res.json(r);//r是表示学生的对象数组
		});
	}
}
module.exports=StuController;
/**
 * 1.得到客户端数据
 * 2.调用M层方法
 * 3.响应客户端
 */
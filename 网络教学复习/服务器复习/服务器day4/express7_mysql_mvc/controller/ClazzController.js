const ClazzModel = require('../model/ClazzModel.js')
class ClazzController {
	constructor() {
	    this.clazzModel = new ClazzModel();
	}
	//查出所有的班级
	queryAll(req,res) {
		let s = this.clazzModel.queryAllClazz(function(clazzes){
			res.json(clazzes);
		});
	}
	//根据id删除班级
	deleteById(req, res) {
		let id = req.body.id;
		this.clazzModel.delClazzById(id, function(r){
			res.json(r);
		})
	}
	//修改
	updateClazz(req, res) {
		let id = req.body.id;
		id = parseInt(id);
		let newName = req.body.newName;
		let newMajor = req.body.newMajor;
		let newBirth = req.body.newBirth;
		this.clazzModel.updateClazz(id, newName,newMajor,newBirth,function(r){
			res.json(r);
		})
	}
	//增加班级
	addClazz(req, res) {
		let name = req.body.addName;
		let major = req.body.addMajor;
		let birth = req.body.addBirth;
		this.clazzModel.insertClazz(name, major, birth, function(r){
			res.json(r);
		});
	}
}
module.exports=ClazzController;

// const con = new ClazzController();
// con.queryAll();

/***
接收客户端请求数据
调用m层处理业务
把处理结果响应到客户端
*/
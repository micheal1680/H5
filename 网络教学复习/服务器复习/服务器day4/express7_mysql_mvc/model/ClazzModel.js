const pool = require("../util/mysqlutil.js");
class ClazzModel {
	//查出所有的班级信息
	queryAllClazz(cb) {
		pool.getConnection(function(e,conn){
			const sql = "select id, name, major, birth from clazz";
			conn.query(sql, [], function(e2, clazzes){
				conn.release();
				cb(clazzes);//调用cb方法
			});
		});
	}
	//根据id删除班级
	delClazzById(id,cb) {
		pool.getConnection(function(e, conn){
			const sql = "delete from clazz where id=?";
			conn.query(sql, [id], function(e2, r){
				conn.release();
				cb(r.affectedRows)
			})
		})
	}
	//修改班级
	updateClazz(id, newName,newMajor,newBirth, cb) {
		pool.getConnection(function(e, conn){
			const sql = "update clazz set name=?,major=?,birth=? where id=?";
			conn.query(sql, [newName,newMajor,newBirth,id], function(e2, r){
				conn.release();
				cb(r.affectedRows)
			})
		})
	}
	//增加一个班级
	insertClazz(name,major,birth,cb) {
		pool.getConnection(function(e, conn){
			const sql = "insert into clazz(name,major,birth)values(?,?,?)";
			conn.query(sql, [name,major,birth], function(e2, r){
				conn.release();
				cb(r.affectedRows)
			})
		})
	}
}

module.exports=ClazzModel;
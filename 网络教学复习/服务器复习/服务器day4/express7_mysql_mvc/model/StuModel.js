const pool = require("../util/mysqlutil.js");
class StuModel {
	//根据班级id查到该班所有的学生
	query(clazzId,cb) {
		pool.getConnection(function(e, conn){
			const sql = "select id, name, sex from stu where c_id=?";
			conn.query(sql, [clazzId], function(e2, r){
				conn.release();
				cb(r)//r是表示学生记录的对象数组
			})
		})
	}
}

module.exports=StuModel;
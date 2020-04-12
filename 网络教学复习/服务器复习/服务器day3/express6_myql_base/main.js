const pool = require("./util/mysqlutil.js");
//删除
//修改
class ClazzDao {
	insert(name, major, birth) {//增加
		pool.getConnection(function(e1, conn){
			if(e1) {//连接失败
				throw e1;
			}else {//连接成功
				const sql = "insert into clazz(name, major, birth) values(?,?,?)";
				conn.query(sql, [name,major, birth], function(e2, r){
					conn.release();
					if(e2) {//查询异常
						throw e2;
					}else {//查询正常
						console.log(r.affectedRows);
					}
				});
			}
		});
	}
	delete(major) {//删除
		pool.getConnection(function(e1, conn){
			if(e1) {
				throw e1;
			}else {
				const sql = "delete from clazz where major=?";
				conn.query(sql, [major], function(e2, r){
					conn.release();
					if(e2) {
						throw e2;
					}else {
						console.log(r.affectedRows);
					}
				})
				conn.query();
			}
		})
	}
	
	update(newMajor, oldMajor) {//修改
		pool.getConnection(function(e1, conn){
			if(e1) {
				throw e1;
			}else {
				const sql = "update clazz set major=? where major=?";
				conn.query(sql, [newMajor, oldMajor], function(e2, r){
					conn.release();
					if(e2) {
						throw e2;
					}else {
						console.log(r.affectedRows);
					}
				})
			}
		})
	}
	
	query(id, major) {//查询
		pool.getConnection(function(e1, conn){
			if(e1) {//连接失败
				throw e1;
			}else {//连接成功
				const sql = "select id, name, major, birth from clazz where id>? and major=?";
				conn.query(sql, [id, major], function(e2, r){
				    conn.release();
					if(e2) {//查询异常
						throw e2;
					}else {//查询正常
						console.log(r);
					}
				});
			}
		});
	}
}
let dao = new ClazzDao();
// dao.insert('2201班', '嵌入式', '2019-09-10');
// dao.query(0, '嵌入式');
// dao.update('h5全栈工程师', 'H5');
// dao.delete("嵌入式工程师");


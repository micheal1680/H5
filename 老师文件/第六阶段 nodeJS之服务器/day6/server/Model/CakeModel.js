const Database = require("./Database");

class CakeModel extends Database {
    constructor() {
        super();//指定调用父类的构造器， 放在子类构造器第一行
    }

    get() {
        console.log(this.mydb)
    }

    // 获取商品列表
    getCakeList(callback) {
        let sql = `select * from cake`;

        this.mydb.query(sql, callback);
    }

    // 根据商品id删除记录
    delCakeById(id, callback) {
        let sql = `delete from cake where id=${id}`;

        this.mydb.query(sql, callback);
    }

    // 添加商品
    addProduct(product, callback) {
        // ?与数组中的元素应该一一对应
        let sql = `insert into cake(name, description, oldprice, newprice, picture, activity, type) values(?,?,?,?,?,?,?)`;
        let paramsArray = [product.name, product.description, product.oldprice, product.newprice, product.file, product.activity, product.type];
        
        this.mydb.query(sql, paramsArray, callback);
    }
}

module.exports = CakeModel;
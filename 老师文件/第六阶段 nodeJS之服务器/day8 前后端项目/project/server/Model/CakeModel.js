const Database = require("./Database");

class CakeModel extends Database {
    constructor() {
        super();//指定调用父类的构造器， 放在子类构造器第一行
    }

    get() {
        console.log(this.mydb)
    }

    // 获取商品列表
    getCakeList(page, num, callback) {
        
        // let sql = `select * from cake limit ${(page-1)*num}, ${num}`;
        let sql = `select * from cake, category where cake.type=category._id limit ${(page-1)*num}, ${num}`

        this.mydb.query(sql, callback);
    }

    // 根据商品id删除记录
    delCakeById(id, callback) {
        let sql = `delete from cake where id=${id}`;

        this.mydb.query(sql, callback);
    }

    // 添加商品
    addProduct(product, callback) {
        // 在表单中有非必填项，但插入数据时需要设定一个默认值
        if(product.oldprice == null || product.oldprice == "") {
            product.oldprice = 0;
        }
        if(product.activity == null || product.activity == "") {
            product.activity = " ";
        }
        // ?与数组中的元素应该一一对应
        let sql = `insert into cake(name, description, oldprice, newprice, picture, activity, type) values(?,?,?,?,?,?,?)`;
        let paramsArray = [product.name, product.description, product.oldprice, product.newprice, product.file, product.activity, product.type];
        
        this.mydb.query(sql, paramsArray, callback);
    }

    //根据商品id修改商品信息
    changeProductById(product, callback) {
        // 在表单中有非必填项，但插入数据时需要设定一个默认值
        if(product.oldprice == null || product.oldprice == "") {
            product.oldprice = 0;
        }
        if(product.activity == null || product.activity == "") {
            product.activity = " ";
        }

        let sql = `update cake set name=?, oldprice=?, newprice=?, type=?, description=?, picture=?, activity=? where id=?`;
        let data = [product.name, product.oldprice, product.newprice, product.type, product.description, product.file, product.activity, product.id];
        this.mydb.query(sql, data, callback);

    }
}

module.exports = CakeModel;
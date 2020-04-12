const express = require("express");
const router = express.Router();
const CakeModel = require("../Model/CakeModel");
const multer = require("multer");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

// 处理post请求的参数
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//处理文件上传操作
var objMulter = multer({ dest: './public/uploads/' });
router.use(objMulter.any()); //any()表示任意类型的文件

router.get("/", (req, res) => {
    let cakeModel = new CakeModel();
    cakeModel.get();
    res.send({ code: 1, msg: "ok" })
})

// 列出商品信息
router.get("/list", (req, res) => {
    console.log("page---" + req.query.page)
    console.log("limit---" + req.query.limit)

    let cakeModel = new CakeModel();
    // 调用Model层的函数查询数据
    cakeModel.getCakeList(req.query.page, req.query.limit, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        if (!results.length) {
            res.send(
                {
                    "code": -1,
                    "msg": "查询失败",
                    "count": 1000,
                    "data": []
                  } 
            )
        } else {
            res.send(
                {
                    "code": 0,
                    "msg": "查询成功",
                    "count": 1000,
                    "data": results
                  } 
            );
        }
    });
})

// 根据商品的id删除记录
router.post("/del", (req, res) => {
    let id = req.body.id;

    let cakeModel = new CakeModel();

    cakeModel.delCakeById(id, (err, results) => {
        if (err) {
            console.log(err);
        }

        if (results.affectedRows) {
            res.send({ code: 0, data: results });
        }
    });
})

// 上传图片
router.post("/upload", (req, res) => {
    // console.log(path.parse(req.files[0].originalname))
    //path.parse 获取文件的信息  .ext表示文件的后缀名
    var newName = req.files[0].path + path.parse(req.files[0].originalname).ext;
    var backName = "uploads/" + req.files[0].filename + path.parse(req.files[0].originalname).ext;
    console.log("newName----" + newName)

    // oldPath: 旧文件路径及名称
    // newPath： 新文件路径及名称
    // callback： 回调函数
    // fs.rename(oldPath, newPath, callback)
    fs.rename(req.files[0].path, newName, function (err) {
        if (err) {
            res.send({
                "code": 0
                , "msg": "上传失败"
                , "data": {
                    "src": ""
                }
            })
        } else {
            res.send({
                "code": 0
                , "msg": "上传成功"
                , "data": {
                    "src": "http://localhost:3000/" + backName   //客户端访问的图片地址
                }
            })
        }
    })
})

// 添加商品
router.post("/add", (req, res) => {
    console.log(req.body);
    let product = req.body;

    let cakeModel = new CakeModel();
    cakeModel.addProduct(product, (err, data) => {
        console.log("data----" + JSON.stringify(data));
        if(err) {
            console.log(err);
            res.send({
                code: -1,
                msg: "添加商品失败"
            })
        }
        if(data.affectedRows) { //添加成功，affectedRows为正值
            res.send({
                code: 0,
                msg: "添加商品成功"
            })
        }
    });

})

//修改数据
router.post("/change", (req, res) => {
    console.log(req.body);
    let product = req.body;

    let cakeModel = new CakeModel();
    cakeModel.changeProductById(product, (err, data) => {
        if(err) {
            res.send({
                code: -1,
                msg: "修改错误"
            })
        } 
        if(data.affectedRows) {
            res.send({
                code: 0,
                msg: "商品修改成功"
            })
        }
    });

})
module.exports = router;
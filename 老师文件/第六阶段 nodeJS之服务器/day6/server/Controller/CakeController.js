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

router.get("/list", (req, res) => {
    let cakeModel = new CakeModel();

    cakeModel.getCakeList((err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        if (!results.length) {
            res.send({ code: -1, data: results })
        } else {
            res.send({ code: 0, data: results });
        }
    });
})

router.get("/del", (req, res) => {
    let id = req.query.id;

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
    console.log(req.files)
    // console.log(path.parse(req.files[0].originalname))
    //path.parse 获取文件的信息  .ext表示文件的后缀名
    var newName = req.files[0].path + path.parse(req.files[0].originalname).ext;
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
                    "src": "http://localhost:3000/" + newName
                }
            })
        }
    })
})

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

module.exports = router;
const express = require('express');
const mysql = require('mysql');

let app = express();
let con = mysql.createConnection({
        host:"localhost",
        port:"3306",
        user:'root',
        password:'123456',
        database:"demo"
})
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    next()
})
con.connect()
app.get('/getProducts',(req,res)=>{
   
    let sql = `select * from shop360 where 1 `
    // let keyword = JSON.parse(req.query).keyword
    // console.log(keyword)
    // console.log(req.query.keyword)
    if(req.query.keyword){
        sql+=`and kw like '%${req.query.keyword}%'`
    }
    
    sql+=` limit ${(req.query.page-1)*30},30`
    con.query(sql,(err,data)=>{
        if(err){
            console.log(err);
            return;
        }

         res.json(data)
    })
})

app.listen('8888',()=>{
console.log(`server run at 8888`)
})
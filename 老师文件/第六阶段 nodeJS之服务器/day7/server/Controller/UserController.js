const express = require("express");
const router = express.Router();
const UserModel = require("../Model/UserModel");

router.get("/", (req, res) => {
    res.send({code: 1, msg: "ok"})
})

module.exports = router;
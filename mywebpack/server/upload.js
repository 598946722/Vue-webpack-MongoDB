// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const findmusic = require('./db').findmusic;
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

router.get('/api',(req,res) => {
    // 通过模型去查找数据库
    findmusic((err,data) => {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
});

module.exports = router;
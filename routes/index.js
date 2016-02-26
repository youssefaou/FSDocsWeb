// the leader of the orchestra

var express = require('express');
var router = express.Router();
var db = require('../database/main');

router.get('/',function(req,res){
    res.render('index');
});

router.get('/test',function(req,res){
    db.connect();
    db.test(req,res);
    db.close();
});

module.exports = router;

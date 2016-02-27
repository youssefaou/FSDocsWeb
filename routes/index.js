// the leader of the orchestra

var express = require('express');
var router = express.Router();
var indexController = require('../controller/index');

router.get('/',function(req,res){
    res.render('index');
});

router.get('/listTeachers',indexController.listTeachers);

router.get('/listStudents',indexController.listStudents);

router.get('/login',function(req,res){
    // the "err" string is used to prevent the user of the error he made filling the form
    res.render('login',{err:null});
});

router.post('/login',indexController.login);

module.exports = router;

// HTTP Router for the Teacher operations

var express = require('express');
var router = express.Router();
var teacherController = require('../controller/teacher');

router.get('/',function(req,res){
    res.send("Teacher Page");
});

router.get('/signup',function(req,res){
    res.render('teacher-signup',{err:null});
});

router.post('/signup',teacherController.signup);

module.exports = router;

// HTTP Router for the Student

var express = require('express');
var router = express.Router();
var studentController = require('../controller/student');

router.get('/',function(req,res){
    res.send("Student Page");
});

router.get('/signup',function(req,res){
    res.render('student-signup',{err:null});
});

router.post('/signup',studentController.signup);

module.exports = router;

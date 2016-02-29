// the leader of the orchestra

var express = require('express');
var router = express.Router();
var indexController = require('../controller/index');
var testController = require('../controller/test');
var utils = require('../utils/session');

router.get('/',function(req,res){
    res.render('index');
});

router.get('/test',utils.isLoggedIn,function(req,res){
    res.send('You \'re Logged in Mr : '+ req.session.user.fname);
});


router.get('/login',function(req,res){
    // the "err" string is used to prevent the user of the error he made filling the form
    res.render('login',{err:null});
});

router.post('/login',indexController.login);


router.get('/listTeachers',testController.listTeachers);

router.get('/listStudents',testController.listStudents);

module.exports = router;

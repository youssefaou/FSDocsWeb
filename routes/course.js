// HTTP Router for the course

var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.render('courses');
});

module.exports = router;

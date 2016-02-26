// HTTP Router for the student operations

var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.send("Student Page");
});

module.exports = router;

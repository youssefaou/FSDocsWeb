// HTTP Router for the teacher operations

var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.send("Teacher Page");
});

module.exports = router;

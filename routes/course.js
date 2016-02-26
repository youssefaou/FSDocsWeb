// HTTP Router for the course operations

var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.send("Course Page");
});

module.exports = router;

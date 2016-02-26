// HTTP Router for the admin operations

var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.send("Admin Page");
});

module.exports = router;

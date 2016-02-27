// HTTP Router for the FTP Uploading

var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.send("Upload Page");
});

module.exports = router;

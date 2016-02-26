// HTTP Router for the FTP Uploading Operation

var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.send("Upload Page");
});

module.exports = router;

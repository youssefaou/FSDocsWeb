var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('index', { title: 'FSDocs ', content : 'Where we fuck docs' });
});

module.exports = router;

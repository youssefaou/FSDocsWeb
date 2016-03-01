var express = require('express');
var path = require('path');
var favicon = require('serve-favicon'); // TODO : FAVICON
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var router = {
  index : require('./routes/index'),
  admin : require('./routes/admin'),
  course : require('./routes/course'),
  student : require('./routes/student'),
  teacher : require('./routes/teacher'),
  upload : require('./routes/upload')
};

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'images/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'FSDOCSTopSecretKey' ,resave : true, saveUninitialized : true}));

/*** Rendering Static Files in the Sub Routers  ( Windows Env Issue ) ***/
/*---------------------CSS---------------------------------------*/
app.get('*/css/zurb-fondation.css', function(req, res){
  res.sendFile(__dirname + '/public/css/zurb-fondation.css');
});
app.get('*/css/color.css', function(req, res){
  res.sendFile(__dirname + '/public/css/color.css');
});
app.get('*/css/transitions.css', function(req, res){
  res.sendFile(__dirname + '/public/css/transitions.css');
});
app.get('*/css/bootstrap.css', function(req, res){
  res.sendFile(__dirname + '/public/css/bootstrap.css');
});
app.get('*/css/bootstrap-responsive.css', function(req, res){
  res.sendFile(__dirname + '/public/css/bootstrap-responsive.css');
});
app.get('*/css/font-awesome.min.css', function(req, res){
  res.sendFile(__dirname + '/public/css/font-awesome.min.css');
});
/*----------------------JS--------------------------------------*/
app.get('*/js/jquery-1.11.0.min.js', function(req, res){
  res.sendFile(__dirname + '/public/js/jquery-1.11.0.min.js');
});
app.get('*/js/bootstrap.min.js', function(req, res){
  res.sendFile(__dirname + '/public/js/bootstrap.min.js');
});
app.get('*/js/jquery.bxslider.min.js', function(req, res){
  res.sendFile(__dirname + '/public/js/jquery.bxslider.min.js');
});
app.get('*/js/owl.carousel.js', function(req, res){
  res.sendFile(__dirname + '/public/js/owl.carousel.js');
});
app.get('*/js/modernizr.js', function(req, res){
  res.sendFile(__dirname + '/public/js/modernizr.js');
});
app.get('*/js/skrollr.min.js', function(req, res){
  res.sendFile(__dirname + '/public/js/skrollr.min.js');
});
app.get('*/js/functions.js', function(req, res){
  res.sendFile(__dirname + '/public/js/functions.js');
});
/*------------------------IMAGES------------------------------------*/
app.get('*/images/logo.png', function(req, res){
  res.sendFile(__dirname + '/public/images/logo.png');
});
app.get('*/images/cate-bg.png', function(req, res){
  res.sendFile(__dirname + '/public/images/cate-bg.png');
});
app.get('*/images/footer-bg.png', function(req, res){
  res.sendFile(__dirname + '/public/images/footer-bg.png');
});
app.get('*/images/pettern.png', function(req, res){
  res.sendFile(__dirname + '/public/images/pettern.png');
});
/*----------------------FONTS--------------------------------------*/
app.get('*/fonts/FontAwesome.otf', function(req, res){
  res.sendFile(__dirname + '/public/fonts/FontAwesome.otf');
});
app.get('*/fonts/fontawesome-webfont.eot', function(req, res){
  res.sendFile(__dirname + '/public/fonts/fontawesome-webfont.eot');
});
app.get('*/fonts/fontawesome-webfont.svg', function(req, res){
  res.sendFile(__dirname + '/public/fonts/fontawesome-webfont.svg');
});
app.get('*/fonts/fontawesome-webfont.ttf', function(req, res){
  res.sendFile(__dirname + '/public/fonts/fontawesome-webfont.ttf');
});
app.get('*/fonts/fontawesome-webfont.woff', function(req, res){
  res.sendFile(__dirname + '/public/fonts/fontawesome-webfont.woff');
});
/*------------------------------------------------------------*/

app.use('/', router.index);
app.use('/admin', router.admin);
app.use('/student', router.student);
app.use('/course', router.course);
app.use('/teacher', router.teacher);
app.use('/upload', router.upload);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;

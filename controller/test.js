var db = require('../database/main');
var dbTest = require('../database/test');

exports.listStudents = function(req,res){
    db.connect();
    dbTest.listStudents(function(err,students){
        if(err) throw  err;
        res.send(JSON.stringify(students,null, 4));
        db.close();
    });
};

exports.listTeachers = function(req,res){
    db.connect();
    dbTest.listTeachers(function(err,teachers){
        if(err) throw  err;
        res.send(JSON.stringify(teachers,null, 4));
        db.close();
    });
};

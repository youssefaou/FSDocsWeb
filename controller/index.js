// The Controller for the app commons HTTP actions

var db = require('../database/main');

exports.login = function(req,res){
    // the HTTP login POST's accessible for both the Teacher and the Student
        // the method retrieves the type of user and make the appropriate treatment
    if(req.body.email && req.body.password){
        var email = req.body.email;
        var password = req.body.password;
        db.connect();
        db.login(email,password,function(err,user){
            if(err){
                throw (err);
            }else{
                if(user){
                    res.send("Welcome  Again "+user.type+"  " + user.email);
                    console.log(user);
                }else{
                    res.render('login',{err : "Wrong Credentials"});
                }
            }
            db.close();
        });
    }else{
        res.render('login',{err : "Please Provide Your Credentials"});
    }
};

exports.listStudents = function(req,res){
    // TEMPORARY FUNCTION : list all students
    db.connect();
    db.listStudents(function(err,students){
        if(err) throw  err;
        res.send(JSON.stringify(students));
        db.close();
    });
};

exports.listTeachers = function(req,res){
    // TEMPORARY FUNCTION : list all teachers
    db.connect();
    db.listTeachers(function(err,teachers){
        if(err) throw  err;
        res.send(JSON.stringify(teachers));
        db.close();
    });
};

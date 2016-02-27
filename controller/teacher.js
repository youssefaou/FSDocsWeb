// The Controller for the Teacher Entity

var db = require('../database/main');

exports.signup = function(req,res){
    if(req.body.fname && req.body.lname && req.body.email && req.body.password && req.body.specialite ){
        if(req.body.password == req.body.password2){
            var newuser = {
                lname  : req.body.lname,
                fname  : req.body.fname,
                email  : req.body.email,
                password  : req.body.password,
                specialite  : req.body.specialite
            };
            db.connect();
            db.teacherSignUP(newuser,function(err,registred){
                if(err) { throw err}
                else{
                    if(registred){
                        res.redirect('/listTeachers');
                    }else{
                        res.render('teacher-signup',{err:"You already Have an account here ! " });
                    }
                }
                db.close();
            })
        }else{
            res.render('teacher-signup',{err:"Password Confirmation's different" });
        }
    }else{
        res.render('teacher-signup',{err:"Please Fill the Form Correctly" });
    }
};

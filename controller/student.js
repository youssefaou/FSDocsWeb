// The Controller for the Student Entity

var db = require('../database/main');
var dbStudent = require('../database/student');

exports.signup = function(req, res) {
    if (req.body.fname && req.body.lname && req.body.cne &&
        req.body.email && req.body.password && req.body.password2
        && req.body.fname && req.body.birthday && req.body.level) {
        if (req.body.password === req.body.password2) {
            var newuser = {
                lname: req.body.lname,
                fname: req.body.fname,
                cne: req.body.cne,
                email: req.body.email,
                password: req.body.password,
                birthday: req.body.birthday,
                level: req.body.level
            };
            db.connect();
            dbStudent.signup(newuser, function(err, registred) {
                if (err) {
                    throw err
                } else {
                    if (registred) {
                        res.redirect('/listStudents');
                    } else {
                        res.render('student-signup', {
                            err: "You already Have an account here ! "
                        });
                    }
                }
                db.close();
            })
        } else {
            res.render('student-signup', {
                err: "Password Confirmation's different"
            });
        }
    } else {
        res.render('student-signup', {
            err: "Please Fill the Form Correctly"
        });
    }
};
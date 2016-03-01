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
                    // Initialise a new session
                    var session =  req.session;
                    session.user = user;
                    if( req.body.device === 'android'){
                        /* ** */
                    }else{
                        console.log(session.user);
                        res.send("Welcome  Again "+user.type+"  " + user.email);
                    }
                    //console.log(user);
                }else{
                    if(req.body.device === 'android'){

                    }else{
                        res.render('login',{ err : "Wrong Credentials"});
                    }
                }
            }
            db.close();
        });
    }else{
        res.render('login',{err : "Please Provide Your Credentials"});
    }
};


//  Main File For the Database Communication
// Holds the SIGN/LOGIN functions as well

// TODO needs separation

var mysql = require('mysql');
var config = require('../config/database').production; // ps : you can toggle between the dev mode / production mode
var queries = require('./queries');

var connection = null;

exports.connect = function() {
    connection = mysql.createConnection({
        host: config.hosturl,
        user: config.username,
        password: config.password,
        database: config.schema
    });
    connection.connect(function(err) {
        if (err) throw err;
    });
};

exports.close = function() {
    connection.end(function(err){
        if(err) throw err;
    });
};


/**
 * Login the Current User : Teacher Or Student
 * @param {String} email
 * @param {String} password
 * @return {Object} loggedUser // TODO : Implements Session
 */
exports.login = function(email,password,callback){
    if(!email || !password) return callback(new Error("NULL EMAIL OR PASSWORD "));
    else {
        var fetchInStudentsSQL = mysql.format(queries.login.fetchInStudents,[email,password]);
        connection.query(fetchInStudentsSQL,function(err,rows){
            if(err) { throw err}
            else{
                if( rows.length > 0  && rows[0].email == email && rows[0].password == password){
                    var user = { id_user : rows[0].id_etudiant , type : "student" , email : rows[0].email , password : rows[0].password , fname : rows[0].prenom , lname : rows[0].nom};
                    return callback(null,user); // return the user Object
                }else{
                    var fetchInTeachersSQL = mysql.format(queries.login.fetchInTeachers,[email,password]);
                    connection.query(fetchInTeachersSQL,function(err,rows){
                        if(err) { throw err}
                        else{
                            if( rows.length > 0  && rows[0].email == email && rows[0].password == password) {
                                var user = { id_user : rows[0].id_professeur , type : "teacher" , email : rows[0].email , password : rows[0].password , fname : rows[0].prenom , lname : rows[0].nom};
                                return callback(null,user); // return the user Object
                            }else{
                                return callback(null,null); // Login Failed;
                            }
                        }
                    })
                }
            }
        });
    }
};

/**
 * Register a new Student
 * @param {Object} the new teacher infos
 * @return {Boolean} State Of Registration // TODO : Implements Mail Verification
 */

exports.studentSignUP = function(user,callback){
    if(!user)  return callback(new Error("NULL NEW STUDENT "));
    else{
        var verifySQL = mysql.format(queries.studentSignUP.verify,[user.email]);
        connection.query(verifySQL,function(err,rows){
            if( err) { throw err }
            else{
                if(rows.length > 0 && rows[0].email === user.email ){
                    return callback(null,null); // SIGNUP Failed;
                }else{
                    var params = [user.lname,user.fname,user.birthday,user.email,user.password,user.cne,user.level];
                    var registerSQL = mysql.format(queries.studentSignUP.register,params);
                    connection.query(registerSQL,function(err,rows){
                        if(err) { throw err }
                        else{
                            return callback(null,true); // Student Registered
                        }
                    })
                }
            }
        })
    }
};

/**
 * Register a new Teacher
 * @param {Object} the new teacher infos
 * @return {Boolean} State Of Registration // TODO : Implements Mail Verification
 */

exports.teacherSignUP = function(user,callback){
    if(!user)  return callback(new Error("NULL NEW TEACHER"));
    else{
        var verifySQL = mysql.format(queries.teacherSignUP.verify,[user.email]);
        connection.query(verifySQL,function(err,rows){
            if( err) { throw err}
            else{
                if(rows.length > 0 && rows[0].email === user.email){
                    return callback(null,null); // SIGNUP Failed;
                }else{
                    var params = [user.lname,user.fname,user.email,user.password,user.specialite];
                    var registerSQL = mysql.format(queries.teacherSignUP.register,params);
                    connection.query(registerSQL,function(err,rows){
                        if(err) { throw err}
                        else{
                            return callback(null,true); // Teacher Registered
                        }
                    })
                }
            }
        })
    }
};

exports.listStudents = function(callback){
  connection.query('select * from etudiant',function(err,rows){
      if(err) return callback(new Error(err));
      else{
          return callback(null,rows);
      }
  })
};

exports.listTeachers = function(callback){
    connection.query('select * from professeur',function(err,rows){
        if(err) return callback(new Error(err));
        else{
            return callback(null,rows);
        }
    })
};
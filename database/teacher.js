// Holds all the necessary actions of the teacher with the database

var mysql = require('mysql');
var queries = require('./queries');
var db = require('./main');

/**
 * Register a new Teacher
 * @param {Object} the new teacher information
 * @return {Boolean} State Of Registration
*/
exports.signup = function(user,callback){
    if(!user)  return callback(new Error("NULL NEW TEACHER"));
    else{
        var connection = db.getConnection();
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



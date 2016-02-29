// Holds all the necessary actions of the student with the database

var mysql = require('mysql');
var queries = require('./queries');
var db = require('./main');

/**
 * Register a new Student
 * @param {Object} the new teacher information
 * @return {Boolean} State Of Registration
 * TODO : Implements Mail Verification
 * TODO : Implements Social Authentication
 */
exports.signup = function(user,callback){
    if(!user)  return callback(new Error("NULL NEW STUDENT "));
    else{
        var verifySQL = mysql.format(queries.studentSignUP.verify,[user.email]);
        var connection = db.getConnection();
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

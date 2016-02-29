/**
 * Main File For the Database Communication
 * Holds the connection/close methods
 * Also instance the database configuration
*/

var mysql = require('mysql');
var config = require('../config/database').production;
// ps : you can toggle between the dev mode / production mode

var connection = null; // the connection object

// Open the Connection with the database with the chosen configuration
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

// Close the Pool connection with the database
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
// TODO : Need Separation
exports.login = function(email,password,callback){
    if(!email || !password) return callback(new Error("NULL EMAIL OR PASSWORD "));
    else {
        var fetchInStudentsSQL = mysql.format(queries.login.fetchInStudents,[email,password]);
        connection.query(fetchInStudentsSQL,function(err,rows){
            if(err) { throw err}
            else{
                if( rows.length > 0  && rows[0].email == email && rows[0].password == password){
                    var user = { id_user : rows[0].id_etudiant , type : "student" ,
                        email : rows[0].email , password : rows[0].password ,
                        fname : rows[0].prenom , lname : rows[0].nom};
                    return callback(null,user); // return the user Object
                }else{
                    var fetchInTeachersSQL = mysql.format(queries.login.fetchInTeachers,[email,password]);
                    connection.query(fetchInTeachersSQL,function(err,rows){
                        if(err) { throw err}
                        else{
                            if( rows.length > 0  && rows[0].email == email && rows[0].password == password) {
                                var user = { id_user : rows[0].id_professeur , type : "teacher" ,
                                    email : rows[0].email , password : rows[0].password ,
                                    fname : rows[0].prenom , lname : rows[0].nom};
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

// Exports the Connection Object So that it can be accessible
// In the Other database Files
exports.getConnection = function(){ return connection; };

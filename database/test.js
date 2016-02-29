var mysql = require('mysql');
var db = require('./main');

exports.listStudents = function (callback) {
    var connection = db.getConnection();
    connection.query('select * from etudiant', function (err, rows) {
        if (err) return callback(new Error(err));
        else {
            return callback(null, rows);
        }
    })
};

exports.listTeachers = function (callback) {
    connection.query('select * from professeur', function (err, rows) {
        if (err) return callback(new Error(err));
        else {
            return callback(null, rows);
        }
    })
};

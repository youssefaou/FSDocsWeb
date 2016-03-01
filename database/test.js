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
    var connection = db.getConnection();
    connection.query('select * from professeur', function (err, rows) {
        if (err) return callback(new Error(err));
        else {
            return callback(null, rows);
        }
    })
};

exports.listCourses = function (callback) {
    var connection = db.getConnection();
    connection.query('select * from cours', function (err, rows) {
        if (err) return callback(new Error(err));
        else {
            return callback(null, rows);
        }
    })
};

exports.listParts = function (callback) {
    var connection = db.getConnection();
    connection.query('select * from partie', function (err, rows) {
        if (err) return callback(new Error(err));
        else {
            return callback(null, rows);
        }
    })
};

exports.listChapters = function (callback) {
    var connection = db.getConnection();
    connection.query('select * from chapitre', function (err, rows) {
        if (err) return callback(new Error(err));
        else {
            return callback(null, rows);
        }
    })
};


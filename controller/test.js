// Controller Made for testing fetching important from the database //

var db = require('../database/main');
var dbTest = require('../database/test');

exports.listStudents = function (req, res) {
    db.connect();
    dbTest.listStudents(function (err, students) {
        if (err) throw  err;
        res.send(JSON.stringify(students));
        db.close();
    });
};

exports.listTeachers = function (req, res) {
    db.connect();
    dbTest.listTeachers(function (err, teachers) {
        if (err) throw  err;
        res.send(JSON.stringify(teachers));
        db.close();
    });
};

exports.listCourses = function (req, res) {
    db.connect();
    dbTest.listCourses(function (err, courses) {
        if (err) throw  err;
        res.send(JSON.stringify(courses));
        db.close();
    });
};

exports.listParts = function (req, res) {
    db.connect();
    dbTest.listParts(function (err, parts) {
        if (err) throw  err;
        res.send(JSON.stringify(parts));
        db.close();
    });
};

exports.listChapters = function (req, res) {
    db.connect();
    dbTest.listChapters(function (err, chapters) {
        if (err) throw  err;
        res.send(JSON.stringify(chapters));
        db.close();
    });
};


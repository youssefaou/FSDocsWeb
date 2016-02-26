// Main File For the Database Communication

var mysql = require('mysql');
var config = require('../config/database').production; // u can toggle between the dev mode / production mode

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
        console.log("CONNECTED TO THE DATABASE");
    });
};
exports.close = function() {
    connection.end();
    console.log("CONNECITON WITH DATABASE CLOSED");
};
exports.test = function(req, res) {
    connection.query('select * from professeur', function(err, rows) {
        if (err){
            throw err;
        }else{
            res.send(rows);
            console.log(rows);
        }
    });
};
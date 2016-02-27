// As indicated by his name, this file holds all the sql needed queries by the application

var login = {};
login.fetchInStudents = "select * from etudiant e where e.email = ? and e.password = ? ";
login.fetchInTeachers = "select * from professeur p where p.email = ? and p.password = ? ";
exports.login = login;

var studentSignUP = {};
studentSignUP.verify = "select * from etudiant e where e.email = ? ";
studentSignUP.register = "insert into etudiant values (null,?,?,?,?,?,?,?) ";
exports.studentSignUP = studentSignUP;


var teacherSignUP = {};
teacherSignUP.verify = "select * from professeur p where p.email = ? ";
teacherSignUP.register = "insert into professeur values (null,?,?,?,?,?) ";
exports.teacherSignUP = teacherSignUP;

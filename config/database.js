// Contains the configuration to access the database
// two objects : the 'dev' and the 'production'

// the 'dev' object's for development only ( local database )
// the 'production' one represents the configuration of the ClearDB

var dev  =  {};
dev.hosturl = 'localhost';
dev.username = 'root';
dev.password = '';
dev.schema = 'fsdocs';
exports.dev = dev;

var production = {};
production.hosturl = 'us-cdbr-iron-east-03.cleardb.net';
production.username = 'b1cb353bd48739';
production.password = '49d03e2e';
production.schema = 'heroku_e5a06377e2be908'; // TODO : crypt the env vars
exports.production = production;

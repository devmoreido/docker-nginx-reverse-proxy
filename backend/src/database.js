const mysql = require('mysql');

exports.connection = mysql.createConnection({
    host: 'database',
    user: 'root',
    password: 'root',
    database: 'database',
});
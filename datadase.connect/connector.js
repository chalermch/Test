const mysql = require('mysql');

const connect = mysql.createConnection({
    host: 'localhost',
    database: 'student_app',
    port: 3306,
    user: 'root',
    password: '',
});

connect.connect;
module.exports = connect;
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burgers_db'
  });
  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });

  module.exports = mysql;
var mysql = require('mysql');
// var connection;

//     if (process.env.JAWSDB_URL){
//         connection = mysql.createConnection(process.env.JAWSDB_URL);
//     }
//     else{
//         connection = mysql.createConnection({
//             host: '	ipobfcpvprjpmdo9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//             user: 'jwwkx6poyqm2vndz',
//             password: 'b4qeewznqza69wno',
//             database: 'g8delghlzbuijzrh'
//     });
// }

//     connection.connect(function(err) {
//         if (err) {
//           console.error("error connecting: " + err.stack);
//         }
//         console.log("connected as id " + connection.threadId);
//       });

//LOCAL HOST

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);

});

  module.exports = connection;

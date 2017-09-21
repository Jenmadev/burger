var myconnection = require('./connection.js');

var orm = {
    selectAll: function (){
        myconnection.query("SELECT * FROM burgers", function(err, data) {
            if (err) throw err;
            console.log(data);
          });
    },
    insertOne: function (data){
        myconnection.query("INSERT INTO burgers (burger_name) VALUES (?)", [data.body.burger], function(err, result) {
            if (err) throw err;
        });
    },
    updateOne: function (data){
        myconnection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [
            data.body.devoured, data.body.id
          ], function(err, result) {
            if (err) throw err;
        });
    }
};

module.exports = orm;
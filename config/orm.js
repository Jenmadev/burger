var myconnection = require('./connection.js');

var orm = {
    selectAll: function (tableName, cb){
        var queryString = "SELECT * FROM ??;";
        myconnection.query(queryString,[tableName], function(err, data) {
            if (err) {
                throw err; 
            }
            cb(data);
          });
    },
    insertOne: function (tableName, colName, data, cb){
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        myconnection.query(queryString,[tableName,colName,data], function(err, result) {
            if (err){
            throw err;
        }
        cb(result);
        });
    },
    updateOne: function (tableName, colName, val, condition, data, cb){
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        myconnection.query(queryString, [tableName,colName,val,condition,data], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;
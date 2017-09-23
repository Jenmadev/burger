// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(data) {
      cb(data);
      // console.log(data);
    });
  },
  insertOne: function(colName, data, cb) {
    orm.insertOne("burgers", colName, data, function(res) {
      cb(res);
    });
  },
  
  updateOne: function(colName, val, condition, data, cb) {
    orm.updateOne("burgers", colName, val, condition, data, function(res) {
      cb(res);
    });
  },

};

// Export the database functions for the controller (catsController.js).
module.exports = burger;

var myconnection = require('connection.js');

myconnection.connection.query("SELECT * FROM burgers", function(err,results){
    for (var i = 0; i < results.length; i++){
        console.log('Item ID: '+ results[i].id  +  '| Burger Name: ' + results[i].burger_name + '| Price: $' + results[i].price+ '| Inventory: ' + results[i].stock_quantity);
        // console.log(results);
    };







module.exports = myconnection;
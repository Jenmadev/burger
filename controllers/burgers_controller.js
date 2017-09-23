var burger = require('../models/burger.js');
var express = require('express');
var router = express.Router();
var path = require('path');

var data = [{
    burgerName: "Cheeseburger",

}];

router.route("/")
    .get(function(req, res) {
        console.log("get");
        burger.selectAll(function(data){
            res.render("index", { burgers: data });
        });
        
    })

    .post(function(req, res) {
        console.log("post");
        burger.insertOne([
            "burger_name"
        ],[
            req.body.burger
        ], function(){
            res.redirect("/");
        });
        
    });

    // router.route("/:id")
    //     .put(function(req, res) {
        router.put("/:id", function(req, res) {
            console.log("put");
        // var condition = "id = " + req.params.id;
        // console.log("condition", condition);

        burger.updateOne(
            "devoured",true,"id",req.params.id, function(){
            res.redirect("/");
        });
        
    });

    module.exports = router;
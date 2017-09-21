var myburger = require('../models/burger.js');
var myorm = require('../config/orm.js');
var express = require('express');
var router = express.Router();
var path = require('path');

router.route("/") 
    .get(function(req, res) {
        myorm.selectAll();
        res.render("index", { burgers: data });
    })

    .post(function(req, res) {
        myorm.insertOne();
        res.redirect("/");
    })

    .put(function(req, res) {
        myorm.updateOne();
        res.redirect("/");
    });

    module.exports = router;
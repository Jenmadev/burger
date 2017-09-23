var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var burgerRoutes = require('./controllers/burgers_controller.js')

var app = express();
var port = process.env.PORT || 8080;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

app.use(express.static("public"));

//ROUTES

app.use('/', burgerRoutes );

// Starts the server to begin listening
// =============================================================
app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
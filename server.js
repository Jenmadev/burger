//Dependencies
var express = require('express');
var exphbs  = require('express-handlebars');
var bodyparser = require('bodyparser');

// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 8000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');

// app.get('/', function (req, res) {
//    res.render('home');
// });

// Starts the server to begin listening
// =============================================================
app.listen(port, function() {
    console.log("App listening on PORT " + port);
  });
require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var session = require('express-session');
var bodyParser = require('body-parser');
var passport = require('passport');
var path = require('path');

// imported files
var userRoutes = require('./controllers/userController.js');
var apiRoutes = require('./controllers/apiController.js')
var db = require("./models");

// set up express
var app = express();

// set port
var PORT = process.env.PORT || 3000;

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");
// passport
app.use(session({
	secret: 'super secret',
	resave: true,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// passport strategy
require('./config/passport/passport.js')(passport, models.user);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;

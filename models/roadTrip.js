// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
var roadTrip = sequelize.define("roadTrip", {
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  activity: Sequelize.STRING,
  weather: Sequelize.INTEGER
});

// Syncs with DB
roadTrip.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = roadTrip;
var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.RoadTrip.findAll({}).then(function(dbRoadTrips) {
      res.render("index", {
        msg: "Welcome!",
        roadTrips: dbRoadTrips
      });
    });
  });

  // Load roadTrip page and pass in a roadTrip by id
  app.get("/roadTrip/:id", function(req, res) {
    db.RoadTrip.findOne({ where: { id: req.params.id } }).then(function(dbRoadTrip) {
      res.render("roadTrip", {
        roadTrip: dbRoadTrip
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

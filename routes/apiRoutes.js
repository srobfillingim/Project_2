var db = require("../models");

module.exports = function(app) {
  // Get all roadTrips
  app.get("/api/roadTrips", function(req, res) {
    db.RoadTrips.findAll({}).then(function(dbRoadTrips) {
      res.json(dbRoadTrips);
    });
  });

  // Create a new roadTrip
  app.post("/api/roadTrips", function(req, res) {
    db.RoadTrip.create(req.body).then(function(dbRoadTrip) {
      res.json(dbRoadTrip);
    });
  });

  // Delete a roadTrip by id
  app.delete("/api/roadTrips/:id", function(req, res) {
    db.RoadTrip.destroy({ where: { id: req.params.id } }).then(function(
      dbRoadTrip
    ) {
      res.json(dbRoadTrip);
    });
  });
};

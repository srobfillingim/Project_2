// var expect = require("chai").expect;

// describe("canary test", function() {
//   // A "canary" test is one we set up to always pass
//   // This can help us ensure our testing suite is set up correctly before writing real tests
//   it("should pass this canary test", function() {
//     expect(true).to.be.true;
//   });
// });

var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

describe("GET /api/roadTrips", function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it("should find all roadTrips", function(done) {
    // Add some roadTrips to the db to test with
    db.RoadTrip.bulkCreate([
      { text: "First RoadTrip", description: "First Description" },
      { text: "Second RoadTrip", description: "Second Description" }
    ]).then(function() {
      // Request the route that returns all examples
      request.get("/api/roadTrips").end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an("array")
          .that.has.lengthOf(2);

        expect(responseBody[0])
          .to.be.an("object")
          .that.includes({
            text: "First roadTrip",
            description: "First Description"
          });

        expect(responseBody[1])
          .to.be.an("object")
          .that.includes({
            text: "Second roadTrip",
            description: "Second Description"
          });

        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });
});

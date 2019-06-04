// Get references to page elements
var $roadTripText = $("#roadTrip-text");
var $roadTripDescription = $("#roadTrip-description");
var $submitBtn = $("#submit");
var $roadTripList = $("#roadTrip-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveRoadTrip: function(roadTrip) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/roadTrips",
      data: JSON.stringify(roadTrip)
    });
  },
  getRoadTrips: function() {
    return $.ajax({
      url: "api/roadTrips",
      type: "GET"
    });
  },
  deleteRoadTrip: function(id) {
    return $.ajax({
      url: "api/roadTrips/" + id,
      type: "DELETE"
    });
  }
};

// refreshRoadTrips gets new roadTrips from the db and repopulates the list
var refreshRoadTrips = function() {
  API.getRoadTrips().then(function(data) {
    var $roadTrips = data.map(function(roadTrip) {
      var $a = $("<a>")
        .text(roadTrip.text)
        .attr("href", "/roadTrip/" + roadTrip.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": roadTrip.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $roadTripList.empty();
    $roadTripList.append($roadTrips);
  });
};

// handleFormSubmit is called whenever we submit a new roadTrip
// Save the new roadTrip to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var roadTrip = {
    text: $roadTripText.val().trim(),
    description: $roadTripDescription.val().trim()
  };

  if (!(roadTrip.text && roadTrip.description)) {
    alert("You must enter a road trip text and description!");
    return;
  }

  API.saveRoadTrip(roadTrip).then(function() {
    refreshRoadTrips();
  });

  $roadTripText.val("");
  $roadTripDescription.val("");
};

// handleDeleteBtnClick is called when a roadTrip's delete button is clicked
// Remove the roadTrip from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteRoadTrip(idToDelete).then(function() {
    refreshRoadTrips();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$roadTripList.on("click", ".delete", handleDeleteBtnClick);

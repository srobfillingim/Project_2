module.exports = function(sequelize, DataTypes) {
  var RoadTrip = sequelize.define("RoadTrip", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return RoadTrip;
};

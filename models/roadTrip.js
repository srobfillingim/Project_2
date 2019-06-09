module.exports = function(sequelize, DataTypes) {
  var roadTrip = sequelize.define("roadTrip", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    activities: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    weather: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    vibeType: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    restStop: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  });

  // Return the model we defined.
  return roadTrip;
};

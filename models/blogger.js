module.exports = function(sequelize, DataTypes) {
  var blogger = sequelize.define("blogger", {
    // Giving the bloggerr model a name of type STRING
    name: DataTypes.STRING
  });
  blogger.associate = function(models) {
    // Associating blogger with Posts
    // When an blogger is deleted, also delete any associated Posts
    blogger.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };
  return blogger;
};

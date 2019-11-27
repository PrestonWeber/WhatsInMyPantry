module.exports = function(sequelize, DataTypes) {
  var Pantry = sequelize.define("Pantry", {
    text: DataTypes.STRING,
    portions: DataTypes.TEXT
  });

  // var Recipes = sequelize.define("Recipes", {
  //   title: DataTypes.STRING,
  //   link: DataTypes.STRING
  // });

  // var User = sequelize.define("User", {
  //   name: DataTypes.STRING
  // });

  return Pantry;
};

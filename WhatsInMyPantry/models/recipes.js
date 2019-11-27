module.exports = function(sequelize, DataTypes) {
  var Recipes = sequelize.define("Recipes", {
    title: DataTypes.STRING,
    link: DataTypes.STRING
  });
  return Recipes;
};

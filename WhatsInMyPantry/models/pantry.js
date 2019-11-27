module.exports = function(sequelize, DataTypes) {
  var Pantry = sequelize.define("Pantry", {
    text: DataTypes.STRING,
    portions: DataTypes.TEXT
  });
  return Pantry;
};

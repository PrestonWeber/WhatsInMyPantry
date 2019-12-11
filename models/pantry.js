module.exports = function(sequelize, DataTypes) {
  var Pantry = sequelize.define("Pantry", {
    text: DataTypes.STRING,
    portions: DataTypes.TEXT
  });

  Pantry.associate = function(models) {
    Pantry.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Pantry;
};

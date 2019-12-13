module.exports = function(sequelize, DataTypes) {
  var Recipes = sequelize.define("Recipes", {
    title: DataTypes.STRING,
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }
  });

  Recipes.associate = function(models) {
    Recipes.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    });
  };
  return Recipes;
};

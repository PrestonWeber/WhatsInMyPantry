var db = require("../models");

module.exports = function(app) {
  app.get("/api/recipes", function(req, res) {
    db.Recipes.findAll({}).then(function(dbRecipes) {
      res.json(dbRecipes);
    });
  });

  app.post("/api/recipes", function(req, res) {
    db.Recipes.create(req.body).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });

  app.delete("/api/recipes/:id", function(req, res) {
    db.Recipes.destroy({ where: { id: req.params.id } }).then(function(dbRecipes) {
      res.json(dbRecipes);
    });
  });
};

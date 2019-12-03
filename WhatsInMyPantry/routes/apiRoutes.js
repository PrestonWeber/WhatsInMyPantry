var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/recipes", function(req, res) {
    db.Recipes.findAll({}).then(function(dbRecipes) {
      res.json(dbRecipes);
    });
  });

  // Create a new example
  app.post("/api/recipes", function(req, res) {
    db.Recipes.create(req.body).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};

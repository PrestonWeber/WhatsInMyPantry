var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Pantry.findAll({}).then(function(dbPantry) {
      res.render("index", {
        msg: "Welcome!",
        pantry: dbPantry
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/api/recipes", function(req, res) {
    db.Recipes.findAll({}).then(function(dbRecipes) {
      res.render("recipes", {
        recipes: dbRecipes
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

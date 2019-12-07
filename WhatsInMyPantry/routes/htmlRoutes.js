var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Pantry.findAll({}).then(function(dbPantry) {
      res.render("index", {
        msg: "Welcome!",
        pantry: dbPantry,
        styles: "styles.css"
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/recipes", function(req, res) {
    db.Recipes.findAll({}).then(function(dbRecipes) {
      res.render("recipes", {
        recipes: dbRecipes,
        styles: "favorites_styles.css"
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

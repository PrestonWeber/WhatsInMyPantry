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

  app.get("/recipes/all", function(req, res) {
    console.log("hit");
    db.Recipes.findAll().then(function(dbRecipes) {
      console.log(dbRecipes);
      res.render("recipes", {
        msg: "Welcome!",
        recipes: dbRecipes
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

var db = require("../models");
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(function(username, password, done) {
    db.User.findOne({ where: { email: username } })
      .then(function(user) {
        console.log(user);

        if (!user) {
          return done(null, false, {
            message: "Incorrect Username"
          });
        }
        if (!user.validPassword(password)) {
          console.log(0);
          return done(null, false, {
            message: "Incorrect Password"
          });
        }
        console.log(1);
        return done(null, user);
      })
      .catch(function(err) {
        return done(err);
      });
  })
);

module.exports = function(app) {
  // Get all examples
  app.get("/api/recipes", function(req, res) {
    db.Recipes.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/recipes", function(req, res) {
    db.Recipes.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/recipes/:id", function(req, res) {
    db.Recipes.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });

  app.get("/api/ingredients", function(req, res) {
    db.Pantries.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/ingredients", function(req, res) {
    db.Pantries.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/ingredients/:id", function(req, res) {
    db.Pantries.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });

  app.get("/api/users", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/users", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/users/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });

  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  app.post("/api/signup", function(req, res) {
    db.User.create(req.body).then(user => res.json(user));
  });

  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    console.log(2);
    res.json(req.user);
  });
};

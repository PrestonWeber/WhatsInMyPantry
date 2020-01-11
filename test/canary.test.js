var expect = require("chai").expect;
<<<<<<< HEAD
<<<<<<< HEAD
var recipes = require("../public/js/recipe");

describe("favoriteFunction", function() {
  // A "canary" test is one we set up to always pass
  // This can help us ensure our testing suite is set up correctly before writing real tests
  it("should pass this canary test", function() {
    expect(favoriteFunction()).to.be.true;
=======
var user = require("../models/user")
=======
>>>>>>> 1cd421213856bbd602ddecb4fcc69064b6b65527

describe("canary", function() {
  // A "canary" test is one we set up to always pass
  // This can help us ensure our testing suite is set up correctly before writing real tests
  it("canary test", function() {
    expect(true).to.be.true;
>>>>>>> 790a898d40363d60d9ad86784bb8c7a503705885
  });
});

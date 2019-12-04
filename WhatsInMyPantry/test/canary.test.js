var expect = require("chai").expect;
var recipes = require("../public/js/recipe");

describe("favoriteFunction", function() {
  // A "canary" test is one we set up to always pass
  // This can help us ensure our testing suite is set up correctly before writing real tests
  it("should pass this canary test", function() {
    expect(favoriteFunction()).to.be.true;
  });
});

var expect = require("chai").expect;

describe("canary", function() {
  // A "canary" test is one we set up to always pass
  // This can help us ensure our testing suite is set up correctly before writing real tests
  it("canary test", function() {
    expect(true).to.be.true;
  });
});

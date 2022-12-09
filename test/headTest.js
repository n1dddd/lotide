const _ = require('../index')
const assert = require('chai').assert

describe ("#head", () => {
  it("returns 5 for [5,6,7]", () => {
    assert.strictEqual(_.head([5,6,7]), 5);
  });
  it("returns 'Hello' for [Hello','Lighthouse','Labs']", () => {
    assert.strictEqual(_.head(['Hello','Lighthouse','Labs']), "Hello")
  });
  it("returns undefined for []", () => {
    assert.isUndefined(_.head([]), 5);
  })
});

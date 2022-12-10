const _ = require('../index');
const assert = require('chai').assert;


describe("#eqArrays", () => {
  it("should return true, if the comparison of the arrays matches exactly (including type)", () => {
    assert.deepStrictEqual((_.eqArrays([1, 2, 3], [1, 2, 3]),true), true);
  });
  it("should return false, if the comparison of the arrays does not match exactly(including type)", () => {
    assert.deepStrictEqual((_.eqArrays([1, 2, 3], [3, 2, 1]),false), false);
  });
  it("should return false, as the type within the arrays differ", () => {
    assert.deepStrictEqual((_.eqArrays(["1", "2", "3"], ["1", "2", 3]), false), false);
  });
});
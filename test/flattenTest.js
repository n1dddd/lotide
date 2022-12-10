const _ = require('../index');
const assert = require('chai').assert;

describe("#flatten", () => {
  it("should return a non-nested array, from a singly-nested array", () => {
    assert.deepStrictEqual(_.flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});
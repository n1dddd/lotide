const _ = require('../index');
const assert = require('chai').assert;

describe("#letterPositions", () => {
  it("should return an array populated with the index positions of the letter, within a string", () => {
    assert.deepStrictEqual((_.letterPositions("lighthouse in the house").h), [3,5,15,18]);
  });
});
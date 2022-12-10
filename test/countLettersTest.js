const _ = require('../index');
const assert = require('chai').assert;

describe("#countLetters", () => {
  it("should return a count for each individual letter instance in a string", () => {
    const results1 = _.countLetters("lighthouse in the house");
    assert.deepStrictEqual(results1["l",1]);
  });
  it("should return a count for each individual letter instance in a string", () => {
    const results1 = _.countLetters("lighthouse in the house");
    assert.deepStrictEqual(results1["h",4]);
  });
});

const _ = require('../index');
const assert = require('chai').assert;

describe("#findByKeyValue", () => {
  it("should return the key of an object, based on the key property argument provided to the function", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    assert.deepStrictEqual(_.findKeyByValue((bestTVShowsByGenre, "The Wire"), "drama"));
  });
  it("should return undefined if the object key property is not defined within the object", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    assert.deepStrictEqual(_.findKeyByValue((bestTVShowsByGenre, "That '70s Show"), undefined));
  });
});

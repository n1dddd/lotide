const _ = require('../index');
const assert = require('chai').assert;

describe("#findKey", () => {
  it("should return the first key that matches based on the callback function", () => {
    const result1 = _.findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2);
    assert.deepStrictEqual(result1, "noma");
  });
});

const _ = require('../index');
const assert = require('chai').assert;

describe("#without", () => {
  it("should return a transformed array, based on the argument itemsToRemove. The returned array should be void of any array element that was marked for removal",() => {
    const words = ["hello", "world", "lighthouse"];
    const result1 = _.without(words, ["lighthouse"]);
    assert.deepStrictEqual(result1,["hello","world"]);
  });
});
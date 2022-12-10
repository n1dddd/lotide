const _ = require('../index');
const assert = require('chai').assert;

describe("#countOnly",() => {
  it("should return a count of number of items in the Object, based on the boolean value in itemsToCount", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    assert.deepStrictEqual(_.countOnly(firstNames,{"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false}), {'Jason':1, 'Fang':2});
  });
  it("should return 1 for the count of Jason in the names array, when the function is called", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result1 = _.countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});
    assert.deepStrictEqual(result1["Jason"],1);
  });
  it("should return undefined for the count of Karima when checking the names array, as Karima is not a valid name in the array", () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const result1 = _.countOnly(firstNames, {"Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});
    assert.deepStrictEqual(result1["Karima"],undefined);
  });
});




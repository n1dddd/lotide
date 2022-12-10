const _ = require('../index');
const assert = require('chai').assert;

describe("#takeUntil",() => {
  it("should begin looping through an array, pushing the values into a new array based on the callback returning a boolean false, and if the callback argument returns a boolean true, terminate the loop, and return the values that have been pushed into the results array as of the loop terminating", () => {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const result1 = _.takeUntil(data1, x => x < 0);
    assert.deepStrictEqual(result1,[1,2,5,7,2]);
  });
});
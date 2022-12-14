const _ = require('../index');
const assert = require('chai').assert;

describe("#middle", () => {
  it("should return two middle values of array with even numbered amount of elements", () => {
    const middleArrayVal = _.middle([1, 2, 3, 4, 5, 6]);
    assert.deepEqual(middleArrayVal, [3,4]);
  });
  it("should return one middle value of array with odd numbered amount of elements", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  });
});

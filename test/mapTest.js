const _ = require('../index');
const assert = require('chai').assert;

describe("#map", () => {
  it("should return a transformed array, based on the callback function", () => {
    const words = ["JKS","Niko","Monesy","Hunter","Hooxi"];
    const results1 = _.map(words, word => word[0]);
    assert.deepStrictEqual(results1, [ 'J', 'N', 'M', 'H', 'H' ]);
  });
  it("should return a transformed array, based on the callback function", () => {
    const numbers = [1,2,3,4,5];
    const results1 = _.map(numbers, number => number * 2);
    assert.deepStrictEqual(results1, [2,4,6,8,10]);
  });
});

// const words = ["JKS","Niko","Monesy","Hunter","Hooxi"];
// const numbers = [1,2,3,4,5];
// const results1 = map(words, word => word[0]);
// assertArraysEqual(results1,[ 'J', 'N', 'M', 'H', 'H' ]);
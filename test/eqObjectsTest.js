const _ = require('../index');
const assert = require('chai').assert;

describe("#eqObjects", () => {
  it("should return true if two objects are equal, comparing keys, and key properties", () => {
    const object1 = {game1: ["cssource"], game2: "csgo"};
    const object2 = {game1: ["cssource"], game2: "csgo"};
    assert.deepStrictEqual(_.eqObjects(object1,object2), true);
  });
  it("should return false if two object are not equal, comparing keys, and key properties", () => {
    const object1 = {game1: ["cssource"],game2: "csgo"};
    const object2 = {game1: ["cssource"],game2: "csgo1"};
    assert.deepStrictEqual(_.eqObjects(object1,object2), false);
  });
});

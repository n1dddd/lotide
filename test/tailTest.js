const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("should return ['Lighthouse', 'Labs']", () => {
    const array = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(array), ["Lighthouse","Labs"]);
  })
  it("should return 2 for the length property", () => {
    const array = ["Yo Yo", "Lighthouse", "Labs"];
    const tailArray = tail(array);
    assert.deepEqual(tailArray.length, 2);
  })
})

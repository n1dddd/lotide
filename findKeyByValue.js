const { findKey } = require(".");

const assertEqual = function(actual, expected) {
  let pass = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  let fail = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  return (actual === expected ? console.log(pass) : console.log(fail));
};

const findKeyByValue = function(object, keyValue) {
  for (const property in object) {
    if (object[property] === keyValue) {
      return property;
    }
  }
  return undefined;
};
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

module.exports = findKeyByValue;
//Function with conditional statement. Return pass or fail statements based on conditional

const assertEqual = function(actual, expected) {
  let pass = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  let fail = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  return (actual === expected ? pass : fail); 
};

module.exports = assertEqual;


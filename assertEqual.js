//Function with conditional statement. 
//If actual is equal to expected, return pass statement.
//If actual does not equal expected, return fail statement.

const assertEqual = function(actual, expected) {
  let pass = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  let fail = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  return (actual === expected ? pass : fail); 
};


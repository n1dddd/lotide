const _ = require('./index')

//Function with conditional requirement.
//Function takes in actual, and expected.
//Calls on the eqObjects function
//eqObjects determines if the actual and expected arguments are equal
//If actual is equal to expected returns true, return pass statement.
//If actual does not equal expected, return fail statement.

const assertEqualObjects = function(actual,expected) {
  const inspect = require('util').inspect;
  if (_.eqObjects(actual,expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


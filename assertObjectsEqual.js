//Function with conditional statement, comparing objects to eachother with the function eqObjects. 
//return log statement if conditional passed or not.

const _ = require('./eqObjects')

const assertObjectsEqual = function(actual,expected) { //changed function to file name
  const inspect = require('util').inspect;
  if (_.eqObjects(actual,expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;


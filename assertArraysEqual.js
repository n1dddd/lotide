const eqArrays = require('./eqArrays') //imports required function from index file

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) {  //eqArrays used to determine if arrays are equal
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`); //log if assertion passes or fails
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;
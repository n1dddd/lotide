const _ = require('./index') //imports required function from index file

const assertArraysEqual = function(array1, array2) {
  if (_.eqArrays(array1,array2)) { //eqArrays used to determine if arrays are equal
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`); //output if arrays are equal
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`); //output if arrays are not equal
  }
};

module.exports = assertArraysEqual; //function export to index file, where all utility functions for 'lotide' are kept
const eqArrays = function(array1,array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1,array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
  }
};

const letterPositions = function(sentence) { //takes in parameter string
  const results = {}; //empty object to store key pairs
  for (let i = 0; i < sentence.length; i++) { //loops through string
    if (sentence[i] !== ' ') { //ignores spaces
      if (results[sentence[i]]) { //if the index value is the seen again throughout the loop
        results[sentence[i]].push(i); //pushes the index(s) into the object key, and stored as an array
      } else {
        results[sentence[i]] = [i]; //if only 1 was seen index, provides index value to array
      }
    }
  }
  return results;
};
assertArraysEqual(letterPositions("lighthouse in the house").h, [3,5,15,18]);




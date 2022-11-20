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
const flatten = function(candyBags) {
  let completeArray = [];
  for (let nestedBags of candyBags) {
    if (Array.isArray(nestedBags)) {
      for (let i = 0; i < nestedBags.length; i++) {
        completeArray.push(nestedBags[i]);
      }
    } else {
      completeArray.push(nestedBags);
    }
  }
  return completeArray;
};
flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);
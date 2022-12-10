//Function takes in two arrays as its arguments
//If the two arrays lengths do not equal eachother exactly, return false
//If the two arrays lengths do equal eachother exactly, return true
//Enable the function to be exported

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
}

//DRIVE CODE (ORIGINALLY USED FOR TESTING);

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true) // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false)// => false
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true) // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true) // => false
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), true); // => should FAIL

module.exports = eqArrays;


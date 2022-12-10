//Set "_" to variable that imports required functions from index.js
//Function that takes in 1 argument (candyBags)
//Initialize new empty array to push values into
//

const _ = require('./index')

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

//DRIVER CODE

//Console.logs for debugging and verifying functionality (was used earlier, before implementing testing with mocha and chai)

// flatten([1, 2, [3, 4], 5, [6]])  => [1, 2, 3, 4, 5, 6] <= expected output
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);


module.exports = flatten;









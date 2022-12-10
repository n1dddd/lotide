//Function that takes in a source array and itemsToRemove as arguments
//Initialize a new results array
//Loop through the source
//Reference itemsToRemove, and if they are included within the source array, remove them
//Else, if the reference does not include itemsToRemove, push the source element to the results array
//Return the results array

const without = function(source,itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.includes(source[i])) {
      //empty as we want to remove source[i]
    } else {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

module.exports = without;

//DRIVE CODE (ORIGINALLY USED FOR TESTING);

// without([1, 2, 3], [1]); // => [2, 3]
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
// assertArraysEqual(words, ["hello", "world"]);
// assertArraysEqual(without(words,"lighthouse"), ["hello", "world"]);
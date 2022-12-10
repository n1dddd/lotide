//Function that takes in an array as an argument
//Conditional that states if the array is less than 2 elements, return an empty array
//Conditional that states if the array elements % 2 === 0, move onto returning the 2 middle values of an array with even number of elements
//Conditional that states if the array element % 2 !== 0, return the single middle value of the array with odd number of elements

const middle = function(array) {
  const emptyArray = [];
  if (array.length <= 2) {
    return emptyArray;
  } else if (array.length % 2 === 0) {
    return [array[Math.floor(array.length / 2) - 1], array[Math.floor(array.length / 2)]];
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
};

//DRIVE CODE (ORIGINALLY USED FOR TESTING);

// console.log(middle([1,2,3]));
// console.log(middle([1,2,3,4]));
// console.log(middle([1, 2, 3, 4, 5, 6]));
// console.log(middle([1, 2, 3, 4, 5, 6, 7]));
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [5]);

module.exports = middle;
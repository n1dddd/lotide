//Map array that takes in an array, and a callback as arguments
//Initialize empty results array
//Loop through the elements of the array
//Population the results array, with the populated elements transformed by the callback (that acted on the original array)

const map = function(array, cb) {
  const results = [];
  for (let item of array) {
    results.push(cb(item));
  }
  return results;
};

//DRIVE CODE (ORIGINALLY USED FOR TESTING);

// const words = ["JKS","Niko","Monesy","Hunter","Hooxi"];
// const numbers = [1,2,3,4,5];
// const results1 = map(words, word => word[0]);
// assertArraysEqual(results1,[ 'J', 'N', 'M', 'H', 'H' ]);
// assertArraysEqual(map(numbers, number => number * 2),[ 2,4,6,8,10 ]);
// assertArraysEqual(map(numbers, number => { //This entire callback function looks confusing
//   if (number % 2 === 0) { //in map function, on each loop of the items in the array, the callback checks if the numbers % 2 === 0
//     number = "hamburger"; //if they are, change number value to string "hamburger"
//     return number; //return the number value at end of loop
//   }
//   return number;//if it isnt % 2, then return the number value in loop anyway
// }),[ 1,"hamburger",3,"hamburger",5 ]);

module.exports = map;



//Set "_" to variable that imports required functions from index.js
//Function eqObjects take two objects in as its arguments
//Conditional statement, converts the keys of object 1 and 2 to respective arrays
//Compares object 1 'key' array to object 2 'key' array
//Return false if their lengths differ
//Loop through, and convert the keys of object 1 into an array
//Conditional statement checks if the properties of object 1 and 2 are arrays
//Using eqArrays function to determine if the properties arrays are indeed equal
//Return false if properties arrays are not equal
//If the properties were not arrays, second conditional that checks if the properties are equal
//Returns true if properties arrays are equal, or if properties themselves are equal

const _ = require('./index')
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const properties of Object.keys(object1)) {
    if (Array.isArray(object1[properties]) && Array.isArray(object2[properties])) {
      if (eqArrays(object1[properties], object2[properties]) !== true) {
        return false;
      }
    } else if (object1[properties] !== object2[properties]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;

//DRIVE CODE (ORIGINALLY USED FOR TESTING);

// const games = {
//   game1: ["cssource"],
//   game2: "csgo"
// };
// const games1 = {
//   game1: ["cssource"],
//   game2: "csgo"
//   game2: "csgo1"
// };
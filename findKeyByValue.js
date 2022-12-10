//Set "_" to variable that imports required functions from index.js
//Function that takes in two arguments, object and keyValue
//Loop through keys in object
//If the objects property is equal to the keyValue, return the property
//If not equal to the keyValue, return undefined

const _ = require('./index');

const findKeyByValue = function(object, keyValue) {
  for (const property in object) {
    if (object[property] === keyValue) {
      return property;
    }
  }
  return undefined;
};

//DRIVE CODE (ORIGINALLY USED FOR TESTING);

//Console.logs for debugging and verifying functionality (was used earlier, before implementing testing with mocha and chai)

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };

// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

module.exports = findKeyByValue;
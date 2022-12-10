//Set "_" to variable that imports required functions from index.js
//Function findKey that takes in two arguments, an object and callback function
//Loop through keys of object, in this case the name of the star
//If the callback condition is met (key.property === 2, return noma)
//Does not return all keys that === 2, rather the first keys property that satisfies the requirement


const _ = require('./index')
const findKey = function(object,callback) {
  for (const property in object) {
    if (callback(object[property])) {
      return property;
    }
  }
  return undefined;
};

//DRIVE CODE (ORIGINALLY USED FOR TESTING);

//Test with mocha and chai can be found in 'test' folder

// const result1 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2); // => "noma"
// _.assertEqual(result1,"noma");

// const result2 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 3); // => "Akaleri"
// _.assertEqual(result2,"Akaleri");

module.exports = findKey;


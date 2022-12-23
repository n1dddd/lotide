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

module.exports = findKey;


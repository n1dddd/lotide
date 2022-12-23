//Function that takes in two arguments, object and keyValue
//Loop through keys in object
//If the objects property is equal to the keyValue, return the property
//If not equal to the keyValue, return undefined

const findKeyByValue = function(object, keyValue) {
  for (const property in object) {
    if (object[property] === keyValue) {
      return property;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;
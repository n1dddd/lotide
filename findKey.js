//Function findKey that takes in two arguments, an object and callback function. Return transformed array, based on callback.

const findKey = function(object,callback) {
  for (const property in object) {
    if (callback(object[property])) {
      return property;
    }
  }
  return undefined;
};

module.exports = findKey;


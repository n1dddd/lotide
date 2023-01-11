//Function eqObjects take two objects in as its arguments. Return boolean based on conditional (if the objects are equal or not)

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

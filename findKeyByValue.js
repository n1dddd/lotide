const _ = require('./index');

const findKeyByValue = function(object, keyValue) {
  for (const property in object) {
    if (object[property] === keyValue) {
      return property;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;
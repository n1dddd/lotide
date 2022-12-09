const _ = require('./index')
const findKey = function(object,callback) {
  for (const stars in object) {
    if (callback(object[stars])) {
      return stars;
    }
  }
  return undefined;
};

module.exports = findKey;


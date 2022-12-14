//Function map that takes in an array, and callback. Returns a transformed results array (based on callback), from original array

const map = function(array, cb) {
  const results = [];
  for (let item of array) {
    results.push(cb(item));
  }
  return results;
};

module.exports = map;



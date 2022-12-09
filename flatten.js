const _ = require('./index')
const flatten = function(candyBags) {
  let completeArray = [];
  for (let nestedBags of candyBags) {
    if (Array.isArray(nestedBags)) {
      for (let i = 0; i < nestedBags.length; i++) {
        completeArray.push(nestedBags[i]);
      }
    } else {
      completeArray.push(nestedBags);
    }
  }
  return completeArray;
};


module.exports = flatten;
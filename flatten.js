//Function that takes in 1 argument (array that contains a single nested array). Return unested array.

const flatten = function(array) {
  let completeArray = [];
  for (let nestedArray of array) {
    if (Array.isArray(nestedArray)) {
      for (let i = 0; i < nestedArray.length; i++) {
        completeArray.push(nestedArray[i]);
      }
    } else {
      completeArray.push(nestedArray);
    }
  }
  return completeArray;
};

module.exports = flatten;









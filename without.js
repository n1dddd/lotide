//Function that takes in a source array and itemsToRemove as arguments. Return an array with elements that do not match to itemsToRemove

const without = function(source,itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

module.exports = without;

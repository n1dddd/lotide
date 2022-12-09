const without = function(source,itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.includes(source[i])) {
      //empty as we want to remove source[i]
    } else {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

module.exports = without;

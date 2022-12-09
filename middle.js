const middle = function(array) {
  const emptyArray = [];
  if (array.length <= 2) {
    return emptyArray;
  } else if (array.length % 2 === 0) {
    return [array[Math.floor(array.length / 2) - 1], array[Math.floor(array.length / 2)]];
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
};

module.exports = middle;
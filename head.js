//Function that takes in an array as its argument and return only the first element of the array (index [0])

function head(array) {
  if (array === undefined) {
    return undefined;
  }
  let firstElement = array[0];
  return firstElement;
}

module.exports = head;

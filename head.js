function head(array) {
  if (array === undefined) {
    return undefined;
  }
  let firstElement = array[0];
  return firstElement;
}

module.exports = head

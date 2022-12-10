//Function that takes in an array as its argument
//If the array is undefined, return undefined
//Otherwise, return only the first element of the array (index [0])

function head(array) {
  if (array === undefined) {
    return undefined;
  }
  let firstElement = array[0];
  return firstElement;
}

//DRIVE CODE (ORIGINALLY USED FOR TESTING);

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]),5);

module.exports = head;

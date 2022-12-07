const tail = function(array) {
  let newArray = []; //empty array for storing 'tail' end of original array.
  if (array === [] || array.length === 0) { //if statement to declare what happens if empty array || single element array
    return console.log(array);
  }
  for (let i = 1; i < array.length; i++) { //for loop to loop through all indexes but the first (0)
    newArray.push(array[i]);
  }
  return console.log(newArray);
};

module.exports = tail;
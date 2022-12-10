const tail = function(array) {
  let newArray = []; //empty array for storing 'tail' end of original array.
  if (array === [] || array.length === 0) { //if statement to declare what happens if empty array || single element array
    return console.log(array);
  }
  for (let i = 1; i < array.length; i++) { //for loop to loop through all indexes but the first (0)
    newArray.push(array[i]);
  }
  return newArray;
};

//DRIVE CODE (ORIGINALLY USED FOR TESTING);

// const array = ["Yo Yo", "Lighthouse", "Labs"];
// tail(array); // no need to capture the return value since we are not checking it
// assertEqual(array.length, 3); // original array should still have 3 elements!

module.exports = tail;
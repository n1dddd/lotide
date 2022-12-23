//Function that takes in an array as its argument and return all elements except the first element of the array

const tail = function(array) {
  let newArray = []; 
  if (array.length === 0) { 
    return newArray; 
  }
  for (let i = 1; i < array.length; i++) { 
    newArray.push(array[i]);
  }
  return newArray;
};

module.exports = tail;
//Function that takes in an array, and callback
//Initialize an empty results array
//Loop through the elements of the array
//If the callback returns a boolean false value, push the element into the results array
//If the callback returns a boolean true value, stop the loop
//Return the results of the array

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item) !== true)
      results.push(item);
    else {
      {break;}
    }
  }
  return results;
};

module.exports = takeUntil;

//DRIVE CODE (ORIGINALLY USED FOR TESTING);

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertArraysEqual(results1,[1,2,5,7,2]);
// assertArraysEqual(results2,['I\'ve', 'been', 'to', 'Hollywood']);


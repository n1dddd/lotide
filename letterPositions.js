const _ = require('./index')

const letterPositions = function(sentence) { //takes in parameter string
  const results = {}; //empty object to store key pairs
  for (let i = 0; i < sentence.length; i++) { //loops through string
    if (sentence[i] !== ' ') { //ignores spaces
      if (results[sentence[i]]) { //if the index value is the seen again throughout the loop
        results[sentence[i]].push(i); //pushes the index(s) into the object key, and stored as an array
      } else {
        results[sentence[i]] = [i]; //if only 1 was seen index, provides index value to array
      }
    }
  }
  return results;
};

module.exports = letterPositions;

//DRIVE CODE (ORIGINALLY USED FOR TESTING);

//assertArraysEqual(letterPositions("lighthouse in the house").h, [3,5,15,18]);

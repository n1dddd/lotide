//Function countLetters takes in a string (sentence to count)
//Loop begins over the string
//If the string is empty, return empty object
//If NOT empty, [letter] of sentenceToCount becomes property of results object
//If the letter is encountered in the loop again, the counter property of [letter] increases
//If letter is only encountered once, return 1.
//Lastly return the counter of the [letter] property in the results object

const countLetters = function(sentenceToCount) {
  const results = {};

  for (const letter of sentenceToCount) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

module.exports = countLetters;

//DRIVE CODE (ORIGINALLY USED FOR TESTING);

// const results1 = countLetters("lighthouse in the house");
// assertEqual(results1["l"],1);
// assertEqual(results1["i"],2);
// assertEqual(results1["g"],1);
// assertEqual(results1["h"],4);
// assertEqual(results1["t"],2);
// assertEqual(results1["o"],2);
// assertEqual(results1["u"],2);
// assertEqual(results1["s"],2);
// assertEqual(results1["e"],3);
// assertEqual(results1["n"],1);




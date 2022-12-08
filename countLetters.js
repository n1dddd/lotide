const assertEqual = function(actual, expected) {
  let pass = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  let fail = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  return (actual === expected ? console.log(pass) : console.log(fail));
};

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



const assertEqual = function(actual, expected) {
  let pass = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  let fail = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  return (actual === expected ? console.log(pass) : console.log(fail));
};

const countLetters = function(sentenceToCount) {
  const results = {};

  for (const letter of sentenceToCount) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return console.log(results);
};

countLetters("lighthouse in the house");


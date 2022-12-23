//Function countLetters takes in a string and returns object containing count of letter instance in string

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





//Function letterPositions takes in string. Returns index position(s) of character within string.

const letterPositions = function(sentence) { 
  const results = {}; 
  for (let i = 0; i < sentence.length; i++) { 
    if (sentence[i] !== ' ') { 
      if (results[sentence[i]]) { 
        results[sentence[i]].push(i); 
      } else {
        results[sentence[i]] = [i]; 
      }
    }
  }
  return results;
};

module.exports = letterPositions;

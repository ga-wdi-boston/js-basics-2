'use strict';

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (/* */) {
  let normalizedWords = words.map((word)=>{
    return word.toUpperCase().replace(/\W+/, '');
  });
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (/* */) {
  for (let i =0; i < normalizedWords.length; i++){
    let word = normalizedWords[i];
    uniqueWordsAsKeys[word] = true;
  }
  /* your response here */
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function (/* */) {
  for (let i = 0; i < normalizedWords.length; i++){
    let word = normalizedWords[i];

  }
  //
  /* your response here */
};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (/* */) {
};
const addOne = function (num) {  //const addOne creates a number that is not undfined
  return (num || 0) + 1; // if the num is falsey then it goes to the 0 then adds 1
};
for (let i = 0; i < normalizedWords.length; i++){
  let word = normalizedWords[i];
  wordFrequencies[word] = addOne(wordFrequencies[word]);
}
  /* your response here */
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};

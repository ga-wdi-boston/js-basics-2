'use strict';

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const getNormalizedWords = function getNormalizedWords(text) {
  let words = text.split(/\s+/);
  let normalizedWords = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i].replace(/\W+/, '');
    normalizedWords[i] = word.toUpperCase();
  }

  return normalizedWords;
};

// 2. Write a function that takes a string arguments
// and returns an array of unique normalized words.
const getUniqueWords = function getUniqueWords(text) {
  let uniqueWordsAsKeys = {};
  let normalizedWords = getNormalizedWords(text);
  for (let i = 0; i < normalizedWords.length; i++) {
    let word = normalizedWords[i];
    uniqueWordsAsKeys[word] = true;
  }

  return Object.keys(uniqueWordsAsKeys);
};

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function wordCount(text, unique) {
  let getWords = unique ? getUniqueWords : getNormalizedWords;
  let count = getWords(text).length;
  return count;
};

// Don't forget to reuse functions wherever possible!



module.exports = {
  getNormalizedWords,
  getUniqueWords,
  wordCount,
};

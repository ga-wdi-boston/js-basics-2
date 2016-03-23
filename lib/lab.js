'use strict';

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const getNormalizedWords = function getNormalizedWords(text) {
  let normalizedWords = [];
  let words = text.split(/\s+/);
  for (let i = 0; i < words.length; i++) {
    let getWord = words[i];
    normalizedWords[i] = getWord.replace(/\W+/, '').toUpperCase();
  }
  return normalizedWords;
};

// 2. Write a function that takes a string arguments
// and returns an array of unique normalized words.
const getUniqueWords = function getUniqueWords() {};
let

// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function wordCount() {};

// Don't forget to reuse functions wherever possible!

module.exports = {
  getNormalizedWords: getNormalizedWords,
  getUniqueWords: getUniqueWords,
  wordCount: wordCount,
};

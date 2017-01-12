'use strict';

// 1. Write a function that takes a string argument splits it into an array of
// normalized words (uppercase strings without punctuation) and returns that
// array.

const getNormalizedWords = function (paragraph) {
  let words = paragraph.split(' ');
  let normalizedWords = [];
  for (let i = 0; i < words.length; i++) {
    normalizedWords[i] = words.toUpperCase().replace(/\W+/,'');
  }
};
//getNormalizedWords();

// 2. Write a function that takes a string arguments and returns an array of
// unique normalized words.
const getUniqueWords = function (paragraph) {
  let uniqueWordsAsKeys = {};
  let normalizedWords = getNormalizedWords(paragraph);
  for(let i = 0; i < normalizedWords.length; i++) {
    let word = normalizedWords[i];
    uniqueWordsAsKeys[word] = true;
  }
    return Object.keys(uniqueWordsAsKeys);
};
//getUniqueWords();

// 3. Write a function that returns the count of words in a string. Provide the
// *option* to count unique words instead of total words. Unique words should be
// taken to mean the set of words that appear at least once (with no repeats).
// For example, the string "bird bird word" contains two unique words: "bird"
// and "word".

const wordCount = function () {
  let uniqueWords = [];
  let keys = [];
  let k = 0;
  for (keys[k++] in uniqueWordsAsKeys); //jshint ignore:line
  uniqueWords = keys;
  let wordFrequencies = {};
  const addOne = function(num) {
    return (num || 0) + 1;
  };
  for(let i = 0; i < normalizedWords.length; i++) {
    let word = normalizedWords[i];
    wordFrequencies[word] = addOne(wordFrequencies[word]);
  }
  // let uniqueWords = unique(getUniqueWords, getNormalizedWords);
  // let count = uniqueWords(paragraph).length;
  // return count;
};

// Don't forget to reuse functions wherever possible!

module.exports = {
  getNormalizedWords,
  getUniqueWords,
  wordCount,
};

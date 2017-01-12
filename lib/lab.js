'use strict';

// 1. Write a function that takes a string argument splits it into an array of
// normalized words (uppercase strings without punctuation) and returns that
// array.
let words = paragraph.split(' ');

const getNormalizedWords = function (words) {
  let normalizedWords = word.map((words) => {
    return word.toUpperCase().replace(/\W+/, '');
});
};

// 2. Write a function that takes a string arguments and returns an array of
// unique normalized words.
const getUniqueWords = function (word) {
  getUniqueWords[word] = true;
};

// 3. Write a function that returns the count of words in a string. Provide the
// *option* to count unique words instead of total words. Unique words should be
// taken to mean the set of words that appear at least once (with no repeats).
// For example, the string "bird bird word" contains two unique words: "bird"
// and "word".
let normalizedWords = {};
const wordCount = function (words) {
  return (wordCount || 0) + 1;
 };
for (let i = 0; i < normalizedWords.length; i++) {
  let word = normalizedWords;
  normalizedWords[word] = wordCount(normalizedWords[word]);
}
// Don't forget to reuse functions wherever possible!

module.exports = {
  getNormalizedWords,
  getUniqueWords,
  wordCount,
};

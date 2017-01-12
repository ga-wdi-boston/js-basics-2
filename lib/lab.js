'use strict';

// 1. Write a function that takes a string argument splits it into an array of
// normalized words (uppercase strings without punctuation) and returns that
// array.



const getNormalizedWords = function (string) {
  let words = string.split(' ');

  return (words.map((word) => {
      return word.toUpperCase().replace(/\W+/, '');

  }));
};

// 2. Write a function that takes a string arguments and returns an array of
// unique normalized words.
const getUniqueWords = function (string) {
  let uniqueWordsAsKeys = {};

  let normalizedWords = getNormalizedWords(string);

  let keys = [];
  let k = 0;


  const insideFunc = function(normalizedWords){
    for (let i = 0; i < normalizedWords.length; i++) {
    let word = normalizedWords[i];
    return uniqueWordsAsKeys[word] = true;
}
    return (keys[k++] in uniqueWordsAsKeys);

  });

    //let uniqueWords = [];

    // let keys = [];
    // let k = 0;
    // for (keys[k++] in uniqueWordsAsKeys);

}
}

// 3. Write a function that returns the count of words in a string. Provide the
// *option* to count unique words instead of total words. Unique words should be
// taken to mean the set of words that appear at least once (with no repeats).
// For example, the string "bird bird word" contains two unique words: "bird"
// and "word".
const wordCount = function () {};

// Don't forget to reuse functions wherever possible!

module.exports = {

  getNormalizedWords,
  getUniqueWords,
  wordCount,
};

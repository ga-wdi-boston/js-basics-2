'use strict';


const getNormalizedWords = function (str) {
  let words = str.split(" ");
  let upCasedWords = [];
  for(let i=0; i<words.length;i++){
    upCasedWords[i] = words[i].toUpperCase().replace(/\W+/, '');
  }
  return upCasedWords;
};

// 2. Write a function that takes a string arguments and returns an array of
// unique normalized words.
const getUniqueWords = function (str) {
  let words = getNormalizedWords(str);
  let uniqWords = {};
  for(let i=0;i<words.length;i++){
    let word = words[i];
    uniqWords[word] = true;
  }
  let keys = [];
  let k = 0;
  for(keys[k++] in uniqWords); //jshint ignore:line
  return keys;
};

// 3. Write a function that returns the count of words in a string. Provide the
// *option* to count unique words instead of total words. Unique words should be
// taken to mean the set of words that appear at least once (with no repeats).
// For example, the string "bird bird word" contains two unique words: "bird"
// and "word".

const wordCount = function (str, opt) {
  let count = getNormalizedWords(str).length;
  if (opt===true){
    return getUniqueWords(str).length;
  } else {
    return count;
  }
};

// Don't forget to reuse functions wherever possible!

module.exports = {
  getNormalizedWords,
  getUniqueWords,
  wordCount,

};

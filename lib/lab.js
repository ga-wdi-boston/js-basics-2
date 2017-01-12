'use strict';

// 1. Write a function that takes a string argument splits it into an array of
// normalized words (uppercase strings without punctuation) and returns that
// array.
const getNormalizedWords = function (string) {
let words = string.split(' ');
return(words.map((word)=>{
  return word.toUpperCase().replace(/\W+/,'');
}));
};

// 2. Write a function that takes a string arguments and returns an array of
// unique normalized words.
const getUniqueWords = function (string) {
  let normalizedWords=getNormalizedWords(string);
  // The words stored as keys of a dictionary
  let uniqueWordsAsKeys = {};

  for (let i=0;i<normalizedWords.length; i++){
    let word = normalizedWords[i];
    uniqueWordsAsKeys[word]=true;
  }

  // The keys pulled out into a list
  let keys = [];
  let k =0;
  for (keys[k++]in uniqueWordsAsKeys); //jshint ignore:line
  return keys;

};

// 3. Write a function that returns the count of words in a string. Provide the
// *option* to count unique words instead of total words. Unique words should be
// taken to mean the set of words that appear at least once (with no repeats).
// For example, the string "bird bird word" contains two unique words: "bird"
// and "word".
const wordCount = function (string, option=false) {
  if(option===true){
    return getUniqueWords(string).length;
  }else{
    return getNormalizedWords(string).length;
  }
};

module.exports = {
  getNormalizedWords,
  getUniqueWords,
  wordCount,
};

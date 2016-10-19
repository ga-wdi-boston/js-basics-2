'use strict';


// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.

//start algorythm/function getnormalwords

const getNormalizedWords = function(text) {

  let words = text.split(/\s+/);
  let normalizedWords = []; //[] means that you are making an array

    //this for loops through words array
    for (let i = 0; i < words.length; i++) {
    // replace non-letters with an empty string
    let word = words[i].replace(/\W+/, '');
    //replacing all lower case letters with uppercase
    normalizedWords[i] = word.toUpperCase();
  }
    return normalizedWords;
};
//end algorythm/function getnormalwords

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const getUniqueWords = function(text) {

  let normalizedWords = getNormalizedWords(text);
//start with the return from function one

  let uniqueWordsAsKeys = {};
  for (let i = 0; i < normalizedWords.length; i++) {

    //this for loop is going to loop through normalizedWords return, one by one,
    //and put each unique element as key objects
    let word = normalizedWords[i];

    uniqueWordsAsKeys[word] = true;
  }

  let uniqueWords = [];
  let k = 0;
  for(uniqueWords[k++]in uniqueWordsAsKeys); //jshint ignore:line
  return uniqueWords;

};
// 3. Write a function that returns the count of words in a string.
// Provid the *option* to count unique words instead of total words.
const wordCount = function(string, unique) {
  unique = (unique || false);
  if (unique === true) {
    let uniqueWords = getUniqueWords(string);
    return uniqueWords.length;
  } else {
    let normalizedWords = getNormalizedWords(string);
    return normalizedWords.length;
  }
};

// Don't forget to reuse functions wherever possible!

module.exports = {
  getNormalizedWords,
  getUniqueWords,
  wordCount,
};

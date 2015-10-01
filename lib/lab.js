'use strict';

var paragraph =
  'We the People of the United States, in Order to form a more ' +
  'perfect Union, establish Justice, insure domestic Tranquility, ' +
  'provide for the common defence, promote the general Welfare, and ' +
  'secure the Blessings of Liberty to ourselves and our Posterity, ' +
  'do ordain and establish this Constitution for the United States ' +
  'of America.';


// 1. Write a function that splits a string into an array of normalized words,
//    (lowercase without punctuation).
var getNormalizedWords = function getNormalizedWords(paragraph) {
  var words = paragraph.split(/\s+/);
  for (var i = 0; i < words.length; i++){
    words[i].replace(/[^\w']+/, '').toLowerCase();
  }
  return words;
};
 // console.log(getNormalizedWords());



//split paragraph into a list, then

// 2. Write a function that takes a string and returns an array of it's unique
//    normalized words.
var getUniqueWords = function getUniqueWords() {
  var uniqueWordsAsKeys = {};
  for (var i = 0; i < getNormalizedWords().length; i++) {
    uniqueWordsAsKeys[getNormalizedWords()[i]] = true;
  }
  var uniqueWords = [];
  var k = 0;
  for (var word in uniqueWordsAsKeys) {
   uniqueWords[k++] = word;
  }
  return uniqueWords;
};
 // console.log(getUniqueWords());





// 3. Write a function that counts how many words are in a string, providing
//    the *option* to count unique words instead of total words.

var wordCount = function wordCount() {
   var answer = Math.random();
   var getWordCount = 0;
  if (answer <= .5) {
    getWordCount = getUniqueWords().length;
    console.log("The total amount of unique words in this paragraph is: " + getWordCount);
  } else {
    getWordCount = getNormalizedWords().length;
    console.log("The total amount of words in this paragraph is: " + getWordCount);
  }
  return getWordCount;
}

console.log(wordCount());



// Don't forget to reuse functions wherever possible!

module.exports = {
  getNormalizedWords: getNormalizedWords,
  getUniqueWords: getUniqueWords,
  wordCount: wordCount
};

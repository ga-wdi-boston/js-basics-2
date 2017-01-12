'use strict';

// 1. Write a function that takes a string argument splits it into an array of
// normalizedWords (uppercase strings without punctuation) and returns that
// array.
const getNormalizedWords = function (text) {
  let words = text.split(' '); //words is array of strings that break on space
  let normalizedWords = [];  //creates empty array for normalizedWords
  for (let i = 0; i < words.length; i++) { //iterates through words
    let word = words[i].toUpperCase().replace(/\W+/, ''); //switch to upper and remove non-alphanumeric characters
    normalizedWords[i] = word; //save the resulting uppercase words into word array
  }

  return normalizedWords; //returns array
};

// 2. Write a function that takes a string arguments and returns an array of
// unique normalized words.
const getUniqueWords = function (text) {
  let uniqueWords = {}; //creats empty object
  let normalizedWords = getNormalizedWords(text); //gets normalized words from first function above
for (let i = 0; i < normalizedWords.length; i++) { //iterates through normalizedWords
  let word = normalizedWords[i]; // get current word from normalizedWords
  uniqueWords[word] = word; //save word as a key so no duplicates
}

return Object.keys(uniqueWords);
};

// 3. Write a function that returns the count of words in a string. Provide the
// *option* to count unique words instead of total words. Unique words should be
// taken to mean the set of words that appear at least once (with no repeats).
// For example, the string "bird bird word" contains two unique words: "bird"
// and "word".
const wordCount = function (text, unique) {
  if (unique) { //when unique true
    return getUniqueWords(text).length; //return uniqueWords array length
  } else {
    return getNormalizedWords(text).length; //otherwise, return normalizedWords array length
  }
};

// Don't forget to reuse functions wherever possible!

module.exports = {
  getNormalizedWords,
  getUniqueWords,
  wordCount,
};


/*
follow the below to test
~/wdi/training/js-reference-types/lib  in branch (training)
ls shows have collections.js lab.js
$ node
> var lab = require('./lab.js')
> lab.wordCount('Hello World! Hello Mike! Hi Shane!', false)
6
> lab.wordCount('Hello World! Hello Mike! Hi Shane!', true)
5
> lab.getUniqueWords('Hello World! Hello Mike! Hi Shane!')
[ 'HELLO', 'WORLD', 'MIKE', 'HI', 'SHANE' ]
> lab.getNormalizedWords('Hello World! Hello Mike! Hi Shane!')
[ 'HELLO', 'WORLD', 'HELLO', 'MIKE', 'HI', 'SHANE' ]
*/

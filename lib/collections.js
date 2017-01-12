'use strict';

const paragraph =
  'When in the Course of human events, it becomes necessary for one ' +
  'people to dissolve the political bands which have connected them ' +
  'with another, and to assume among the powers of the earth, the ' +
  'separate and equal station to which the Laws of Nature and of ' +
  'Nature\'s God entitle them, a decent respect to the opinions of ' +
  'mankind requires that they should declare the causes which impel ' +
  'them to the separation.';

// The paragraph split into a list
let words = paragraph.split(" ");

// The word list normalized (all uppercase with punctuation removed)
let normalizedWords = words.map((word) => {
  return word.toUpperCase().replace(/\W+/, '');
});

// The words stored as keys of a dictionary
let uniqueWordsAsKeys = {};

for (let i=0; i<normalizedWords.length; i++){
  let word = normalizedWords[i];
  uniqueWordsAsKeys[word] = true;
}

// The keys pulled out into a list
let uniqueWords = [];

let keys =[];
let k =0;
for (keys[k++] in uniqueWordsAsKeys); //jshint ignore:line

uniqueWords = keys;



// The words as keys and the values the count of each word
let wordFrequencies = {};

const addOne = function (num) {
  return (num || 0)+1;
};

for (let i=0; i<normalizedWords.length; i++){
  let word = normalizedWords[i];
  wordFrequencies[word] = addOne(wordFrequencies[word]);
}

module.exports = {
  words,
  normalizedWords,
  uniqueWordsAsKeys,
  uniqueWords,
  wordFrequencies,
};

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
//turns the paragraph into an array of words
let words = paragraph.split(' ');

// The word list normalized (all uppercase with punctuation removed)
// .map keeps tabs on repeated elements
//normalizedWords returns each word as an uppercase, doesn't omit extras
let normalizedWords = words.map((word) => {
  return word.toUpperCase().replace(/\W+/,'');
});

// The words stored as keys of a dictionary
let uniqueWordsAsKeys = {};

for(let i = 0; i < normalizedWords.length; i++){
  let word = normalizedWords[i];
//when maps says a word has only been used once, it's true...
//maps shields the extra times a word is used bc they're false after the first time
//for every instance i = 0 aka When until i = 71 aka separation
//pick out the ones that are true and print them
  uniqueWordsAsKeys[word] = true;
}

// The keys pulled out into a list
let uniqueWords = [];

let keys = [];
let k = 0;
for (keys[k++] in uniqueWordsAsKeys); //jshint ignore:line

uniqueWords = keys;

// The words as keys and the values the count of each word
let wordFrequencies = {};

//addOne is a function of number that adds a number for every repeated word...
//so if wordFrequencies[word] adds one each time a given word is used
const addOne = function(num) {
  return (num || 0) + 1;
};
//from the first to the last word, assuming we go one at a time...
for(let i = 0; i < normalizedWords.length; i++) {
// we want the variable word to equal each given word
  let word = normalizedWords[i];
//then wordFrequencies of each word we'll run the addOne function
//so wordFrequencies will equal a number for each given word
  wordFrequencies[word] = addOne(wordFrequencies[word]);
}

module.exports = {
  words,
  normalizedWords,
  uniqueWordsAsKeys,
  uniqueWords,
  wordFrequencies,
};

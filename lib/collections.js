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
let words = [];
const splitParagraph = (para) => {
  return para.split(' ');
};
words = splitParagraph(paragraph);

// The word list normalized (all uppercase with punctuation removed)
let normalizedWords = [];
const normalizeWords = (splitPara) => {
  return splitPara.map(function(word) {
    return word.toUpperCase().replace(/[^A-Z]/g, '');
  });
};
normalizedWords = normalizeWords(words);

// The words stored as keys of a dictionary
let uniqueWordsAsKeys = {};
const wordsToKeys = (normWords) => {
  let dict = {};
  normWords.forEach(function(element) {
    dict[element] = null;
  });
  return dict;
};
uniqueWordsAsKeys = wordsToKeys(normalizedWords);

// The keys pulled out into a list
let uniqueWords = [];
const keysToList = (dict) => {
  return Object.keys(dict);
};
uniqueWords = keysToList(uniqueWordsAsKeys);

// The words as keys and the values the count of each word
let wordFrequencies = {};
const createFreqDict = (normWords) => {
  let freqDict = {};
  normWords.sort();
  let i = 0;
  while(i < normWords.length) {
    let wordFreq = 1;
    while(normWords[i] === normWords[i+wordFreq]) {
      wordFreq++;
    }
    freqDict[normWords[i]] = wordFreq;
    i += wordFreq;
  }
  return freqDict;
};
wordFrequencies = createFreqDict(normalizeWords(words));

module.exports = {
  normalizedWords,
  uniqueWords,
  wordFrequencies,
};

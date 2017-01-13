'use strict';
const paragraph =
  'We the People of the United States, in Order to form a more ' +
  'perfect Union, establish Justice, insure domestic Tranquility, ' +
  'provide for the common defence, promote the general Welfare, and ' +
  'secure the Blessings of Liberty to ourselves and our Posterity, ' +
  'do ordain and establish this Constitution for the United States ' +
  'of America.';
  const normalizedWords = [
    'A', 'AMERICA', 'AND', 'AND', 'AND', 'BLESSINGS', 'COMMON',
    'CONSTITUTION', 'DEFENCE', 'DO', 'DOMESTIC', 'ESTABLISH',
    'ESTABLISH', 'FOR', 'FOR', 'FORM', 'GENERAL', 'IN',
    'INSURE', 'JUSTICE', 'LIBERTY', 'MORE', 'OF', 'OF', 'OF',
    'ORDAIN', 'ORDER', 'OUR', 'OURSELVES', 'PEOPLE', 'PERFECT',
    'POSTERITY', 'PROMOTE', 'PROVIDE', 'SECURE', 'STATES',
    'STATES', 'THE', 'THE', 'THE', 'THE', 'THE', 'THE', 'THIS',
    'TO', 'TO', 'TRANQUILITY', 'UNION', 'UNITED', 'UNITED',
    'WE', 'WELFARE',
  ];

// Reuse functions wherever possible.

// 1. Write a function that takes a string argument
// splits it into an array of normalized words
// (uppercase strings without punctuation)
// and returns that array.
const normalizeWords = function (paragraph) {
  let normalizedWords = words.map((word)=>{
    return word.toUpperCase().replace(/\W+/, '');
  });
};

// 2. Write a function that takes a string argument
// and returns an array of unique normalized words.
const uniqueWords = function (/* */) {
  for (let i =0; i < normalizedWords.length; i++){
    let word = normalizedWords[i];
    uniqueWordsAsKeys[word] = true;
  }
  /* your response here */
};

// 3. Write a function that takes a string argument and returns the count of
// words in a string.
// Provide the *option* to count unique words instead of total words, by passing
// a second argument.

const wordCount = function () {
  for (let i = 0; i < normalizedWords.length; i++){
    let word = normalizedWords[i];

  }
  //
  /* your response here */
};

// 4. Write a function that takes a string and returns a dictionary with unique
// words as keys and a count of each word as the value for that key
const wordFrequencies = function (/* */) {
  let uniqueWordsAsKeys = {};
  for (let i =0; i < getNormalizedWords.length; i++){
    let word = getNormalizedWords[i];
    uniqueWordsAsKeys[word] = true;
    return getUniqueWords;
  }
  /* your response here */
};

module.exports = {
  normalizeWords,
  uniqueWords,
  wordCount,
  wordFrequencies,
};

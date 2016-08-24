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
// define words as an array and split based on the regular expression
// for one or more blank spaces
let words = [];
words = paragraph.split(/\s+/);
console.log("Words is ", words);

// The word list normalized (all uppercase with punctuation removed)
let normalizedWords = [];

// iterate over the `words` array and build normalizedWords array by
// copying the words array and removing any non-word characters
for (let i = 0; i < words.length; i++){
  normalizedWords[i] = words[i].replace(/\W+/, '').toUpperCase();
  // IF words[i] evaluates to 'earth,'
  // then normalizedWords[i] would be assigned the value 'earth'
  // normalizedWords[i] = normalizedWords[i].toUpperCase();
}

console.log("normalizedWords is now ", normalizedWords);

// The words stored as keys of a dictionary
let uniqueWordsAsKeys = {};
// iterate through normalizedWords array and store each value as a key
// in the uniqueWordsAsKeys Object. NOTE! You cannot have duplicate keys in
// any object. So each time this code attempts to duplicate a key/value pair
// it's actually just reassigning that key a new value.


//const paragraph =
  // 'When in the in Course of human in events,';
for (let i = 0; i < normalizedWords.length; i++){
  uniqueWordsAsKeys[normalizedWords[i]] = true;
  console.log(uniqueWordsAsKeys);
}

console.log("unique words as keys is ", uniqueWordsAsKeys);

// The keys pulled out into a list
// Define an emtpy array that we will put uniqueWords in.

let uniqueWords = [];

// We then iterate through the keys from our uniqueWordsAsKeys object
// and stuff them into our uniqueWords array.

let count = 0;
for (let key in uniqueWordsAsKeys){
  uniqueWords[count] = key;
  count++;
}

console.log('uniqueWords is ', uniqueWords);

// The words as keys and the values the count of each word
let wordFrequencies = {};

// iterates through the normalizedWords array and builds our wordFrequencies
// object as we go.

// The first question we ask is IF this specific word already exists as a key.
// IF it doesn't exist yet (=== `undefined`), we need to add it so we grab that
// object and store the word as a key and the value as '1'
// OTHERWISE we need to update that value from its current value, to its current
// value + 1, (wordFrequencies[normalizedWords[i]] += 1)

for( let i = 0; i < normalizedWords.length; i++){
  if(wordFrequencies[normalizedWords[i]] === undefined){
    wordFrequencies[normalizedWords[i]] = 1;
  }
  else{
    // all three of these are the same
    // wordFrequencies[normalizedWords[i]] = wordFrequencies[normalizedWords[i]] + 1;
    // wordFrequencies[normalizedWords[i]] += 1;
    wordFrequencies[normalizedWords[i]]++;
  }
}

console.log(wordFrequencies);

module.exports = {
  normalizedWords,
  uniqueWords,
  wordFrequencies,
};

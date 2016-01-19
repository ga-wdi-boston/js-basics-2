'use strict';

var paragraph =
  'When in the Course of human events, it becomes necessary for one ' +
  'people to dissolve the political bands which have connected them ' +
  'with another, and to assume among the powers of the earth, the ' +
  'separate and equal station to which the Laws of Nature and of ' +
  'Nature\'s God entitle them, a decent respect to the opinions of ' +
  'mankind requires that they should declare the causes which impel ' +
  'them to the separation.';



// The paragraph split into a list

// The .split() method takes the contents in the variable paragraph (which is a concatenated string) and splits it using the whitespace as the breakpoints, and then returns an array.So, now the variable word returns and array when the paragraph.split() method occurs

var words = paragraph.split(/\s+/);
console.log(words);



// The word list normalized (all lower case with punctuation removed)

var normalizedWords = [];

for (var i = 0; i < words.length; i++){
  normalizedWords[i] = words[i].replace(/[^\w']+/, '').toLowerCase();
}

// Here, we declare a variable normalizedWords and initialize it as an array. We then do a for loop iterating over the length of the array. This for loop evaluates each item in the word array, and replaces anything that is NOT a word or an apostrophe with an empty space using the .replace() method (which is used for strings only, I believe?), and returns another array with all the spaces and punctuation removed. Then, we use the .toLowerCase() method to convert this latest array contents to all lowercase, and return an array. That array gets passed into the normalizedWords array.





// The words stored as keys of a dictionary

var uniqueWordsAsKeys = {};

for (var j = 0; j < normalizedWords.length; j++) {
  var normalizedWord = normalizedWords[j];
  uniqueWordsAsKeys[normalizedWord] = true;

}

  // Here we create an associated array, aka, a hash (hashmap?). We declare a variable uniqueWordsAsKeys and initialize it as a hash. We then create a for loop that iterates over the length of the normalizedWords array.

  // In this loop, we declare a variable normalizedWord which will store each value of the normalizedWords array indexes and will use that stored value to create unique keys in the uniqueWordsAsKeys array. At the same time we will assign these new keys into the array, we assign a value of this key to true.

  // So, the key:value pair of each item in uniqueWordsAsKeys hash has a key:value of normalizedWord:true.

  // keys always have to be unique in a hash, so we've accomplished this


  //if there is no key, put in a key and assign the value as true. That makes each item in the key:value pair evaluate to truthy. Not sure why ths is important... If there is a key... couldn't type fast enough to catch this.
  //stores the normalizedWord as a key in the uniqueWordsAsKey, therefore creates unique keys




// The keys pulled out into a list

var uniqueWords = [];

var k = 0;

for (var word in uniqueWordsAsKeys) {
  uniqueWords[k++] = word;
}
// First, we declare a variable uniqueWords and set it to store an array.

// We are using an uncommon looping construct here to loop through the keys in a hash.

// This site explains it pretty well:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

// The postfix increment operator is used here. To get this looping construct to work, we declare a value k and set k to 0, We then use this loop to iterate over the keys in the uniqueWordsAsKeys hash object.

// We do this by declaring a variable word. In this scenario, word is the a key in uniqueWordsAsKeys according to that Mozilla Dev Net document.

// Then, in the for loop, we iterate over all the keys in uniqueWords[k], starting at 0. We just iterate through the uniqueWordsAsKeys to populate the contents of just the keys from that hash into the uniqueWords array. It doesn't do it in the order of the keys in uniqueWordsAsKeys, it's just spitting out all the key values and putting it in a new array.

// Question: does this loop populate the values in the uniqueWords array not in any particular order because all the value pairs of the unique keys are set to true?

// Another question: I'm not quite clear as to why this finds unique words... if keys are supposed to be unique in a hash, what happens in the uniqueWordsAsKeys hash from the previous loop? I read somewhere in stackoverflow if you write duplicate key names, the last (duplicate) key name written will overwrite the previous. Is that correct? Is that how JS automatically ensures that a hash has only unique keys? If so, that helps me understand how this works!

// so when var runs out of keys, the loop terminates. That is why whe used the postfix increment operator here, so we'd be guaranteed to iterate over every single unique key in the uniqueWordsAsKeys hash.

// console.log(uniqueWords);
// console.log(uniqueWords.length === k);
//shows that k is the length of the array in this type of loop construct




// The words as keys and the values the count of each word

var wordFrequencies = {};

for (var l = 0; l < normalizedWords.length; l++) {
  var normalWord = normalizedWords[l];
  if (!wordFrequencies[normalWord]) {
    wordFrequencies[normalWord] = 0;
  }
  wordFrequencies[normalWord] += 1;
}


//if the value in normalWord doesn't exist in wordFrequencies, always do this (set the wordFrequency[normalWord] to 0 so it's initialized) and then do the default (set the wordFrequency[normalWord] to 1). That takes care of making sure everything is initialized, and that words that only occur once are counted. How does the second one get counted?

// We are creating a key:value pair for a word and how often that word occurs in an array. So... we make a variable normalWord that is set to the value of normalizedWord[l]. that value becomes the key for the wordFrequencies[key] in the wordFrequencies{} hash.

// We build in a safety mechanishm: If the key doesn't exist (is falsey?) in normalizedWords, initialize it and set it to 1 (because we want to be sure that each key is at least truthy?).

// Then, we continue the loop through the normalizedWords array. Whenever we come across a repeated array value (a word) in normalizeWords, the wordFrequency[key] of that particular word increments by one.

// console.log(wordFrequencies);

module.exports = {
  normalizedWords: normalizedWords,
  uniqueWords: uniqueWords,
  wordFrequencies: wordFrequencies
};

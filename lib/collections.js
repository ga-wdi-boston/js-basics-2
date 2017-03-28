'use strict'

const paragraph =
  'When in the Course of human events, it becomes necessary for one ' +
  'people to dissolve the political bands which have connected them ' +
  'with another, and to assume among the powers of the earth, the ' +
  'separate and equal station to which the Laws of Nature and of ' +
  'Nature\'s God entitle them, a decent respect to the opinions of ' +
  'mankind requires that they should declare the causes which impel ' +
  'them to the separation.'

const addOne = function (num) {
  return (num || 0) + 1
}

// The paragraph split into a list
const words = paragraph.split(/\s+/)

// The word list normalized (all uppercase with punctuation removed)
const normalizedWords = []
for (let i = 0; i < words.length; i++) {
  const word = words[i].replace(/\W+/, '')
  normalizedWords[i] = word.toUpperCase()
}

// The words stored as keys of a dictionary
const uniqueWordsAsKeys = {}
for (let i = 0; i < normalizedWords.length; i++) {
  const word = normalizedWords[i]
  uniqueWordsAsKeys[word] = true
}

// The keys pulled out into a list
let uniqueWords = []

const keys = []
let k = 0
for (keys[k++] in uniqueWordsAsKeys); // jshint ignore:line

uniqueWords = keys

// The words as keys and the values the count of each word
const wordFrequencies = {}

for (let i = 0; i < normalizedWords.length; i++) {
  const word = normalizedWords[i]
  wordFrequencies[word] = addOne(wordFrequencies[word])
}

module.exports = {
  normalizedWords,
  uniqueWords,
  wordFrequencies
}

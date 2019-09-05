window.addEventListener('load', init);

//Global variables
let time = 5;
let score = 0;
let isPlaying;

//DOM elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

//Word array
const words = [
  'hello',
  'mouse',
  'statue',
  'book',
  'pizza',
  'phone',
  'clock',
  'river',
  'house',
  'pebble',
  'magic',
  'siblings',
  'curtain',
  'blanket',
  'sunlight',
  'convertible',
  'document',
  'briefcase',
  'trapdoor',
  'generate',
  'resistance',
  'immunity',
  'expansive',
  'mitigate',
  'liaise',
  'collaborate',
  'revolution',
  'smile',
  'sibilance',
  'abstraction',
  'encapsulation',
  'inheritance',
  'polymorphism',
  'javascript',
  'developer'
];

//Load game
function init(){
  //Load word from word array
  showWord(words);
}

//Pick and display random word from array
function showWord(words){
  const randomIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randomIndex];
}

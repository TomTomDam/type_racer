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
  //Word input
  wordInput.addEventListener('input', startGame);
  //Call timer to count down every second
  setInterval(countdown, 1000);
  //Check if game is over
  setInterval(checkStatus, 50);
}

//Start game
function startGame(){
  if (matchWords()) {
    isPlaying = true;
    time = 6;
    showWord(words);
    wordInput.value = '';
    score += 10;
  }
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

//Match current word against wordInput
function matchWords(){
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!';
    return true;
  } else {
      message.innerHTML = '';
      return false;
    }
}

//Pick and display random word from array
function showWord(words){
  const randomIndex = Math.floor(Math.random() * words.length);
  currentWord.innerHTML = words[randomIndex];
}

//Countdown timer
function countdown(){
  if (time > 0) {
    time--;
  } else if (time === 0) {
    isPlaying = false;
  }

  timeDisplay.innerHTML = time;
}

//Check if game is over
function checkStatus(){
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game over!';
    score = -1;
  }
}

// Try modular coding.Use functions to do the task.Stop sphagetti code.

let guessField = document.querySelector('#guessField');
let subt = document.querySelector('#subt');
let correct = document.querySelector('.correct');
let form = document.querySelector('.form');
let guessRemainingelem = document.querySelector('.lastResult');
let prevguess = document.querySelector('.guesses');
let lowOrHi = document.querySelector('.lowOrHi');
const resultValue = Math.ceil(Math.random() * 100);
console.log(resultValue);
let guessValue;
let remainingGuess = 10;
form.addEventListener('submit', operation);

function operation(e) {
  if (remainingGuess > 0) {
    e.preventDefault();
    guessValue = guessField.value;
    if (true == isNaN(guessValue)) {
      console.log('Please enter a number'); //Premade ui vayera console ma print gareko
      console.log(guessValue);
    } else {
      if (guessValue == resultValue) {
        correct.innerHTML = 'Correct value.You won';
      } else if (guessValue > resultValue) {
        correct.innerHTML = 'Incorrect.Try again';
        remainingGuess--;
        guessRemainingelem.innerHTML += `${remainingGuess}`;
        lowOrHi.innerHTML = 'Try lower';
      } else {
        correct.innerHTML = 'Incorrect.Try again';
        remainingGuess--;
        guessRemainingelem.innerHTML += `${remainingGuess}`;
        lowOrHi.innerHTML = 'Try higher';
      }
    }
  } else {
    e.preventDefault();
    correct.innerHTML = `Game over.0 chances left.Your number was ${resultValue}.Reload to replay.`;
  }
  let prevguessvalue = guessValue;
  prevguess.innerHTML = `${prevguessvalue}`;
  guessField.value = ' ';
}

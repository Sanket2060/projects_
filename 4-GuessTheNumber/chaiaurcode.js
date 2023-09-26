let guessField = document.querySelector('#guessField');
let subt = document.querySelector('#subt');
let correct = document.querySelector('.correct');

const resultValue = Math.ceil(Math.random() * 100);
console.log(resultValue);
console.log("Hello");
let remainingGuess = 10;
while (remainingGuess != 0) {
subt.addEventListener('click', () => {
    let guessValue = guessField.value;
    let previousGuess = guessValue;
    if (resultValue == guessValue) {
      correct.innerHTML("Congrats");
      break;
    }
    remainingGuess--;
  })
}

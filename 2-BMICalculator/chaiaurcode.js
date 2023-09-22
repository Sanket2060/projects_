let heightdiv = document.querySelector('#height');
let weightdiv = document.querySelector('#weight');
let results = document.querySelector('#results');
let calculate = document.querySelector('button');
console.log(calculate);
let resulttext;
calculate.addEventListener('click', (e) => {
  console.log('helo');
  height = parseInt(heightdiv.value);
  weight = parseInt(weightdiv.value);
  let bmi = weight / ((height / 100) * (height / 100));
  if (bmi < 18.6) {
    resulttext = 'Under weight';
  } else if (bmi > 18.6 && bmi < 24.9) {
    resulttext = 'Normal range';
  } else if (bmi > 24.9) {
    resulttext = 'Overweight';
  }
  console.log(bmi);
  results.innerHTML = `${resulttext}`;
  e.preventDefault();
});

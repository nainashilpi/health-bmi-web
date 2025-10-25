document.querySelector('#bmiForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const height = parseFloat(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(!height || height <= 0) {
    results.textContent = 'Please enter a valid height.';
    return;
  }

  if(!weight || weight <= 0) {
    results.textContent = 'Please enter a valid weight.';
    return;
  }

  const bmi = (weight / ((height/100) ** 2)).toFixed(2);
  results.textContent = `Your BMI is ${bmi}`;
});

// import functions and grab DOM elements
import { add, minus, multiply, divide } from './math-utils.js';

 //Addition
const addInput1 = document.getElementById('add-num1');
const addInput2 = document.getElementById('add-num2');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('add-result');
const addCount = document.getElementById('add-count');
let countAddClicks = 0;

// set event listener
// original code...
// addButton.addEventListener('click', () => {
//   const num1 = +addInput1.value;
//   const num2 = +addInput2.value;
//   const sum = add(num1, num2);
//   addResult.textContent = sum;
// });

//  improved code version by reducing 3 lines of codes (line 11-13)
addButton.addEventListener('click', () => {
  addResult.textContent = add(+addInput1.value, +addInput2.value)
  // Click counts
  countAddClicks += 1;
  console.log(countAddClicks);
  addCount.textContent = countAddClicks;
});

// Subtraction
const minusInput1 = document.getElementById('minus-num1');
const minusInput2 = document.getElementById('minus-num2');
const minusButton = document.getElementById('minus-button');
const subtractResult = document.getElementById('minus-result');
const minusCount = document.getElementById('minus-count');
let countMinusClicks = 0;

minusButton.addEventListener('click', () => {
  subtractResult.textContent = minus(+minusInput1.value, +minusInput2.value);
  countMinusClicks += 1;
  console.log(countMinusClicks);
  minusCount.textContent = countMinusClicks;
});

// Multiplication
const multiplyInput1 = document.getElementById('multiply-num1');
const multiplyInput2 = document.getElementById('multiply-num2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyResult = document.getElementById('multiply-result');
const multiplyCount = document.getElementById('multiply-count');
let countMultiplyClicks = 0;

multiplyButton.addEventListener('click', () => {
  multiplyResult.textContent = multiply(+multiplyInput1.value, +multiplyInput2.value);
  countMultiplyClicks += 1;
  console.log(countMultiplyClicks);
  multiplyCount.textContent = countMultiplyClicks;
});

// Division
const divideInput1 = document.getElementById('divide-num1');
const divideInput2 = document.getElementById('divide-num2');
const divideButton = document.getElementById('divide-button');
const divideResult = document.getElementById('divide-result');
const divideCount = document.getElementById('divide-count');
let countDivideClicks = 0;

divideButton.addEventListener('click', () => {
  divideResult.textContent = divide(+divideInput1.value, +divideInput2.value);
  countDivideClicks += 1;
  console.log(countDivideClicks);
  divideCount.textContent = countDivideClicks;
});
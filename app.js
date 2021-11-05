// import functions and grab DOM elements
import { add, minus, multiply, divide } from './math-utils.js';

const addInput1 = document.getElementById('add-num1');
const addInput2 = document.getElementById('add-num2');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('add-result');

addButton.addEventListener('click', () => {
  const num1 = +addInput1.value;
  const num2 = +addInput2.value;
  const sum = add(num1, num2);
  addResult.textContent = sum;
});

const minusInput1 = document.getElementById('minus-num1');
const minusInput2 = document.getElementById('minus-num2');
const minusButton = document.getElementById('minus-button');
const subtractResult = document.getElementById('minus-result');

minusButton.addEventListener('click', () => {
  const num1 = +minusInput1.value;
  const num2 = +minusInput2.value;
  const subtract = minus(num1, num2);
  subtractResult.textContent = subtract;
});

const multiplyInput1 = document.getElementById('multiply-num1');
const multiplyInput2 = document.getElementById('multiply-num2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyResult = document.getElementById('multiply-result');

multiplyButton.addEventListener('click', () => {
  const num1 = +multiplyInput1.value;
  const num2 = +multiplyInput2.value;
  const multiplication = multiply(num1, num2);
  multiplyResult.textContent = multiplication;
});

const divideInput1 = document.getElementById('divide-num1');
const divideInput2 = document.getElementById('divide-num2');
const divideButton = document.getElementById('divide-button');
const divideResult = document.getElementById('divide-result');

divideButton.addEventListener('click', () => {
  const num1 = +divideInput1.value;
  const num2 = +divideInput2.value;
  const division = divide(num1, num2);
  divideResult.textContent = division;
});

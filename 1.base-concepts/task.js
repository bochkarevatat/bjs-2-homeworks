'use strict'

function solveEquation(a, b, c) {
  let arr = [];
  const D = b ** 2 - (4 * a * c);
  let x1 = 0;
  let x2 = 0;

  if (D == 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    arr[0] = x1;
  }
  if (D > 0) {
    console.log(D)
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);

    arr[0] = x1;
    arr[1] = x2;

  } else if (D < 0) {

    return [];
  }

  // код для задачи №1 писать здесь
  return arr; // array
};


solveEquation();
console.log(solveEquation(1, 5, 4))


















function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
'use strict'

function solveEquation(a, b, c) {
  let arr = [];
  const D = b ** 2 - (4 * a * c);
  let x1 = 0;
  let x2 = 0;

  if (D === 0) {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    arr[0] = x1;
  }
  if (D > 0) {
    console.log(D)
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);

    arr[0] = x1;
    arr[1] = x2;

  } 

  // код для задачи №1 писать здесь
  return arr; // array
};


solveEquation();
console.log(solveEquation(1, 5, 4))


















function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let currentDate = new Date();
  let payPeriod = (date.getFullYear() - currentDate.getFullYear()) * 12 - (currentDate.getMonth() - date.getMonth());

  console.log(payPeriod);

  let returnAmount = amount - contribution;
  let realPercent = percent / 100 / 12;
  let monthlyPay = returnAmount * (realPercent + (realPercent / (((1 + realPercent) ** payPeriod) - 1)));

  console.log(monthlyPay);
  totalAmount = monthlyPay * payPeriod;
  console.log(totalAmount.toFixed(2));

  if (percent > 0 && contribution >= 0 && amount >= 0) {

    return (totalAmount.toFixed(2));

  } else {
    return (`"введенные данные  некорректны "`)
  };







  return totalAmount.toFixed(2);
}
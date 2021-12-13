// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = -Infinity;
  max = Infinity;
  sum = 0;
  for (let i = 0; i < arr.length; i++) {

    max = Math.max.apply(Math, arr);
    min = Math.min.apply(Math, arr);
    sum += arr[i];
    avg = (sum / arr.length).toFixed(2);
    avg = parseFloat(avg);
  };

  console.log(max,min)

  return {
    min: min,
    max: max,
    avg: avg
  };
}

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...

  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
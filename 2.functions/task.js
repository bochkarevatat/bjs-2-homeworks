// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = -Infinity;
  max = Infinity;
  sum = 0;
    max = Math.max.apply(Math, arr);
    min = Math.min.apply(Math, arr);
  for (let i = 0; i < arr.length; i++) {

    
    sum += arr[i];
    
  };
  avg = (sum / arr.length).toFixed(2);
  avg = parseFloat(avg);
  console.log(max, min)

  return {
    min: min,
    max: max,
    avg: avg
  };
}

// Задание 2
function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  };

  return sum;
}
console.log(sum)

function makeWork(arrOfArr, func) {
  let max = 0;
  let startSum1 = 0;
  
  for (let i = 0; i < arrOfArr.length; i++) {
    startSum1 = func(arrOfArr[i]);
    
   if (startSum1 > max){
      max = startSum1;
   }
    
    

  }
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
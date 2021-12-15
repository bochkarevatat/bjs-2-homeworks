function compareArrays(arr1, arr2) {
  let result;

  function everyCompare(index){
    
    return arr1[index] === arr2[index]; 
    
  }
result = arr1.length === arr2.length && arr1.every(everyCompare)

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  // Ваш код

  return resultArr; // array
}

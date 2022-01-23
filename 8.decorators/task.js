function cachingDecoratorNew(func) {

  let cache = [];

  function wrapper(...args) {

    const hash = args.toString(); 
    let idx = cache.findIndex((item) => item.hash === hash);
    console.log(idx);

    if (idx !== -1) {
      console.log("Из кэша: " + cache[hash]);
      return "Из кэша: " + cache[hash];
    } else {
      let result = func(...args);
      cache[hash] = result
      cache.push({hash});
      if (cache.length > 5) {
        cache.shift();

      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }


  }
  return wrapper;
};


function debounceDecoratorNew(func) {
  // Ваш код
}

function debounceDecorator2(func) {
  // Ваш код
}
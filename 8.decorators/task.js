function cachingDecoratorNew(func) {

  let cache = [];


  function wrapper(...args) {

    const hash = {};
    hash.hash = args.toString();

    let idx = cache.findIndex((item) => item.hash === hash.hash);
    // console.log(idx);

    if (idx !== -1) {
      console.log("Из кэша: " + cache[idx].value);
      return "Из кэша: " + cache[idx].value;
    }
    let result = func(...args);
    hash.value = result
    cache.push(hash);


    if (cache.length > 5) {
      cache.shift();

    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }


  return wrapper;
};






function debounceDecoratorNew(func, ms) {

  let timer = false;

  function wrapper(...args) {
    if (timer)
      return;

    func.apply(...args);

    timer = true;

    setTimeout(() => timer = false, ms);
  };
  console.log(timer)
  return wrapper;
};





function debounceDecorator2(func, ms) {
  let timer = false;

  function wrapper(...args) {
    if (timer)
      return;

    func.apply(...args);

    timer = true;
    wrapper.count = wrapper.count + 1;
    setTimeout(() => timer = false, ms);
    console.log(wrapper.count);
  };

  wrapper.count = 0;

  return wrapper;

};
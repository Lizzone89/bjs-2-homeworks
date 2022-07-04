function cachingDecoratorNew(func) {
  let cache = [];

function wrapper(...args) {
  const hash = args.join(',')
  let index = cache.findIndex((item)=> item.hash === hash )
  if (index !== -1 ) { 
      console.log("Из кэша: " + cache[index].value)
      return "Из кэша: " + cache[index].value;
    }

  let result = func(...args);
  cache.push({hash: hash, value: result});
   if (cache.length > 5) { 
    cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
}

return wrapper;
}


function debounceDecoratorNew(func, interval) {

  let timeout;

  function wrapper(args) {
    if (!timeout) {
      func.apply(this, args);
     }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, interval);
   }

  return wrapper;
}

function debounceDecorator2(func, interval) {
  
  let timeout;
  wrapper.count = 0;

  function wrapper(args) {
    if (!timeout) {
      func.apply(this, args);
      wrapper.count++;
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
    func.apply(this, args);
    wrapper.count++;
    }, interval);
  }
  return wrapper;
}

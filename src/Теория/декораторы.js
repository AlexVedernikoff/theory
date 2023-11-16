export function ReactCachingDecorator(func) {
  //   ************************************************************************
  //   *** декораторы *********************************************************

  function slow(...args) {
    // здесь могут быть ресурсоёмкие вычисления
    return Math.pow(args[0], args[1]);
  }

  const myMath = {
    someMethod() {
      return 2;
    },
    slow(min, max) {
      return min + max + this.someMethod();
    },
  };

  function hash(args) {
    return `${args[0]},${args[1]}`;
  }

  function cachingDecorator(func, hash) {
    const cache = new Map();
    return function () {
      let key = hash(arguments); // создаём ключ при помощи хэш-функции
      if (cache.has(key)) {
        console.log(`читаем результат из кэша`);
        return cache.get(key);
      }
      console.log(`вызываем функцию ${func.name}`);
      let result = func.call(this, ...arguments);

      cache.set(key, result); // сохряняем результат в кэш
      return result;
    };
  }
  // *** Тестируем функцию-декоратор ***********************************************

  const cashedSlow = cachingDecorator(slow, hash);
  myMath.slow = cachingDecorator(myMath.slow, hash);
  console.log("cashedSlow(2,3) = ", cashedSlow(2, 3));
  console.log("cashedSlow(2,3) = ", cashedSlow(2, 3));
  console.log("myMath.slow(2, 3) = ", myMath.slow(2, 3));
  console.log("myMath.slow(2, 3) = ", myMath.slow(2, 3));

  // *******************************************************************************
  // *** Разница между call, bind и apply ******************************************

  function showPrice(arg1, arg2) {
    console.log(`${arg1}${this.price}${arg2}`);
  }

  const notebook = { price: 100 };
  const phone = { price: 200 };
  const mouse = { price: 5 };

  showPrice.call(notebook, "цена устройства ", " $"); // call принимает аргументы списком
  showPrice.apply(phone, ["цена устройства ", " $"]); // apply принимает массив из аргументов
  showPrice.bind(mouse)("цена устройства ", " $");

  // *******************************************************************************
}

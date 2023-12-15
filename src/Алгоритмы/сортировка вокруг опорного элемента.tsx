// *** БЫСТРАЯ сортировка массива (вокруг ОПОРНОГО элемента) **

export const sortPivReact = () => {
  // **********************************************************
  let i = 0;
  function sortPiv(arr: Array<any>) {
    i++;
    // console.log("********************************************************");
    // console.log("Выполняется функция sortPiv для массива ", arr);
    if (arr.length < 2 || i > 2020) return arr;
    if (arr.length < 2) return arr;
    const pivot = arr[0];
    // console.log("Опорный элемент равен = ", pivot);
    // const [leftArr, rghtArr] = [[], []];
    const LRArrays = arr.reduce(
      (acc: Array<Array<any>>, el, i) => {
        if (i === 0) return acc;
        pivot > el ? acc[0].push(el) : acc[1].push(el);
        return acc;
      },
      [[], []]
    );
    // *******************************************************************
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
      if (pivot > arr[i]) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    // console.log("LRArrays = ", LRArrays[0], " ", LRArrays[1]);
    // console.log("left, right = ", left, " ", right);
    // return sortPiv(LRArrays[0]).concat(pivot).concat(sortPiv(LRArrays[1]));
    // return sortPiv(LRArrays[0]).concat(sortPiv(LRArrays[1]));
    // return quickSort(left).concat(pivot, quickSort(right));
    return sortPiv(LRArrays[0]).concat(pivot, sortPiv(LRArrays[1]));
  }
  const quickSort = (arr) => {
    // Условие остановки, выхода из рекурсии, возвращем массив с 1 элементом
    if (arr.length < 2) return arr;
    // Выбираем опорный элемент
    let pivot = arr[0];
    // Определяем массивы для тех, что меньше и больше опорного
    const left = [];
    const right = [];

    // Проходим циклом по всем элементам из массива и разносим их в массивы созданные ранее согласно условию, больше опорного - в правый, меньше - в левый
    for (let i = 1; i < arr.length; i++) {
      if (pivot > arr[i]) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    // Рекурсивно повторяем процесс для новых двух массивов, текущий опорный элемент - кладем как первый в правый массив.
    return quickSort(left).concat(pivot, quickSort(right));
  };

  // *** Проверка ***
  const list = createArray(1000, 1000000);
  console.log("Массив, который нужно отсортировать = ", list);
  console.log("Результат сортировки = ", quickSort(list));
  console.log("Результат сортировки = ", sortPiv(list));
  // **********************************************************
};

function createArray(length, max) {
  const result: number[] = [];
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  for (let i = 0; i < length; i++) {
    result.push(getRandomInt(max));
  }
  return result;
}

// *** references ***
// https://ru.hexlet.io/qna/javascript/questions/kak-sdelat-bystruyu-sortirovka-massiva-na-javascript?ysclid=lq77h5szxa338217288
// https://thecode.media/qsort/?ysclid=lq77dpc7df770043262

// А это мы просто тестируем git ammend

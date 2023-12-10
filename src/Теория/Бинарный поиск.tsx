// 1 находим середину массива middle

export const BinarySearchReact = () => {
  // **********************************************************
  function binarySearch(arr: number[], value: number, position = 0) {
    const middle = Math.floor(arr.length / 2);
    // если в массиве остался всего один элемент
    if (middle === 0) {
      return arr[middle] === value ? position : undefined;
    }
    // если первый элемент правого массива = value, а последний элемент левого не равен.
    if (arr[middle] === value && arr[middle - 1] !== value) {
      return position + middle;
    }

    return arr[middle] > value || arr[middle - 1] === value
      ? binarySearch(arr.slice(0, middle), value, position)
      : binarySearch(arr.slice(middle), value, position + middle);
  }

  //   const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const list = createArray(16, 5).sort((a, b) => (a >= b ? 1 : -1));

  list.forEach((el, i) => {
    console.log(
      "Индекс элемента ",
      el,
      " равен = ",
      binarySearch(list, el),
      " ",
      binarySearch(list, el) === list.indexOf(el)
      //   binarySearch(list, el) === i
    );
  });

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

// Черновик функции, который может понадобиться для будущей отадки
//   function binarySearch(arr: number[], value: number, i = 0, position = 0) {
//     i === 0 && console.log("*************************************************");
//     i++;
//     if (i > 20) return;
//     console.log(`\nИщем число ${value} в массиве = `, arr);
//     const middle = Math.floor(arr.length / 2);
//     // console.log("position = ", position);
//     // console.log("индекс середины массива middle = ", middle);
//     const leftArr = arr.slice(0, middle);
//     const rightArr = arr.slice(middle);
//     console.log("левый массив = ", leftArr);
//     console.log("правый массив = ", rightArr);

//     if (middle === 0) {
//       return arr[middle] === value ? position : undefined;
//     }
//     if (arr[middle] === value && arr[middle - 1] !== value) {
//       console.log("Мы здесь!");
//       console.log("position = ", position);
//       console.log("индекс середины массива middle = ", middle);
//       console.log("возвращаем индекс = ", position + middle);
//       return position + middle;
//     }

//     return arr[middle] > value || arr[middle - 1] === value
//       ? binarySearch(arr.slice(0, middle), value, i, position)
//       : binarySearch(arr.slice(middle), value, i, position + middle);
//   }

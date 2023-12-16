// *** Алгоритм пузырьковой сортировки ************************
// Пузырьковая сортировка – один из самых неэффективных алгоритмов с количеством операций O(N²).
// Смысл называния - большие числа, как большие пузырьки воздуха, всплывают наверх.

import { createArray } from "../zПрочее/createArray";
import { deepEqual } from "../Теория/deepEqual";

export const bubbleSortReact = () => {
  function bubbleSort(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
      }
    }
    return arr;
  }
  //   ********************************************************

  function bubbleSortPro(array: Array<any>) {
    let sorted = false;
    let counter = 0;
    //функция меняет местами два элемента в массиве
    function swap(i: number, j: number, arr: Array<any>) {
      return ([arr[i], arr[j]] = [arr[j], arr[i]]);
    }

    while (!sorted) {
      sorted = true;
      for (let i = 0; i < array.length - 1 - counter; i++) {
        if (array[i] > array[i + 1]) {
          swap(i, i + 1, array);
          sorted = false;
        }
      }
      counter++;
    }
    return array;
  }

  // *** Проверка ***
  const list = createArray(10, 100);
  console.log("Массив, который нужно отсортировать = ", list);
  console.log("Результат сортировки = ", bubbleSort(list));
  console.log(
    `Результат функции ${bubbleSort.name} совпадает с методом Array.sort = `,
    deepEqual(
      bubbleSort(list),
      [...list].sort((a, b) => a - b)
    )
  );
  console.log(
    `Результат функции ${bubbleSortPro.name} совпадает с методом Array.sort = `,
    deepEqual(
      bubbleSortPro(list),
      [...list].sort((a, b) => a - b)
    )
  );
};

// *** references ***
// https://proglib.io/p/sort-gif  визуализация алгоритмов сортировки массива в gif-ках.
// 1-й способ. Через двойной вложенный цикл for( arr.length ) {}
// https://proglib.io/p/bubble-sort
// 2-й способ, более изящный, с проверкой  sorted = true/false
// https://stackoverflow.com/questions/37817334/javascript-bubble-sort

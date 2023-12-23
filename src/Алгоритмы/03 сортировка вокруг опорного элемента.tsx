// *** БЫСТРАЯ сортировка массива (вокруг ОПОРНОГО элемента) **
// Алгоритм сортировки, разработанный английским информатиком Тони Хоаром во время его работы в МГУ
// в 1960 году.
// в среднем  O(n log n)
// в худшем случае O (n^2)

import { createArray } from "../zПрочее/createArray";
import { deepEqual } from "../Теория/deepEqual";

export const quickSortReact = () => {
  // **********************************************************

  const quickSort = (arr: Array<any>) => {
    // Условие остановки, выхода из рекурсии, возвращем массив с 1 элементом
    if (arr.length < 2) return arr;
    // Выбираем опорный элемент
    // const pivotIndex = Math.floor(Math.random() * arr.length); // опционально - случайный выбор опорного элемента
    // let pivot = arr[pivotIndex];
    let pivot = arr[0];
    // Определяем массивы для тех, что меньше и больше опорного
    const [left, right]: Array<Array<any>> = [[], []];

    // Проходим циклом по всем элементам из массива и разносим их в массивы созданные ранее согласно условию, больше опорного - в правый, меньше - в левый
    for (let i = 1; i < arr.length; i++) {
      // random  let i = 0
      // if (i === pivotIndex) continue;
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
  const list = createArray(10, 100);
  // const list = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  console.log("Массив, который нужно отсортировать = ", list);
  console.log("Результат сортировки = ", quickSort(list));
  console.log(
    `Результат функции ${quickSort.name} совпадает с методом Array.sort = `,
    deepEqual(
      quickSort(list),
      [...list].sort((a, b) => a - b)
    )
    // `Количество операций = ${count}`
  );

  // **********************************************************
};

// *** references ***
// https://ru.hexlet.io/qna/javascript/questions/kak-sdelat-bystruyu-sortirovka-massiva-na-javascript?ysclid=lq77h5szxa338217288
// https://thecode.media/qsort/?ysclid=lq77dpc7df770043262

// Анализ времени выполнения
// https://habr.com/ru/companies/otus/articles/524948/

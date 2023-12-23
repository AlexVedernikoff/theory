import { createArray } from "../zПрочее/createArray";
import { deepEqual } from "../Теория/deepEqual";

const users = [
  { number: 4, name: "Николай" },
  { number: 2, name: "Анастасия" },
  { number: 1, name: "Тимур" },
  { number: 2, name: "Евгений" },
  { number: 3, name: "Катерина" },
];

// *** Алгоритм сортировки массива выбором ********************
// Временная сложность O(N²).
// Является устойчиваой (стабильной) => не меняет относительный порядок элементов с одинаковыми значениями.

export const selectionSortReact = () => {
  console.log("*** Сортировка массива выбором ***");
  // ***********************************************************
  // *** Сортировка выбором в одну сторону *********************

  function selectionSort(array, compare = (a, b) => a - b) {
    function swap(a: number, b: number, arr: Array<any>) {
      [arr[a], arr[b]] = [arr[b], arr[a]];
    }
    for (let i = 0; i < array.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        // if (array[j] < array[minIndex]) {
        if (compare(array[j], array[minIndex]) < 0) {
          minIndex = j;
        }
      }
      swap(i, minIndex, array);
    }
    return array;
  }

  // *** Вариант двухсторонней сортировки c callback ***
  function selectionSortDouble(array, callback = (a, b) => a - b) {
    console.log("Сортируемый массив = ", array);
    function swap(a: number, b: number, arr: Array<any>) {
      [arr[a], arr[b]] = [arr[b], arr[a]];
    }
    let max = 0;
    for (let i = 0; i < array.length - 1 - max; i++) {
      let minIndex = i;
      let maxIndex = i;
      console.log(
        `сортированные/несортированные части массива = `,
        array.slice(0, minIndex),
        array.slice(minIndex, array.length - max),
        array.slice(array.length - max, array.length)
      );
      console.log(`\n\n*** Назначаем элемент array[${i}] = ${array[i]} минимальным 
        и сравниваем его c остальными элементами массива`);

      for (let j = i + 1; j < array.length - max; j++) {
        // if (array[j] < array[minIndex]) {
        if (callback(array[j], array[minIndex]) < 0) {
          minIndex = j;
        }
        // if (array[j] > array[maxIndex]) {
        if (callback(array[j], array[maxIndex]) > 0) {
          maxIndex = j;
        }
      }
      console.log(
        `min элемент [${minIndex}] = ${array[minIndex]} || `,
        `max элемент [${maxIndex}] = ${array[maxIndex]}`
      );
      const before = [...array];
      if (minIndex !== i) {
        console.log(
          `Меняем местами элементы [${i}] ${array[i]} и [${minIndex}] ${array[minIndex]}`
        );

        swap(i, minIndex, array);
        console.table([before, array]);
      }
      if (maxIndex !== i) {
        console.log(
          `Меняем местами элементы  [${maxIndex}] ${array[maxIndex]} и [${
            array.length - 1 - max
          }] ${array[array.length - 1 - max]}`
        );
        swap(maxIndex, array.length - 1 - max, array);
        max++;
        console.table([before, array]);
      }
    }
    return array;
  }

  // *** Проверка ***
  const list = createArray(50, 1000);
  console.log(`массив для сортировки = `, list);

  // *** Проверка односторонней сортировки ***
  // (1) Простой массив
  console.log(
    `Результат функции ${selectionSort.name} совпадает с методом Array.sort = `,
    deepEqual(
      selectionSort([...list]),
      [...list].sort((a, b) => a - b)
    )
  );
  // (2) Массив из объектов
  console.log("Отсортированный массив из объектов = ");
  console.log(
    selectionSort([...users], ({ number: numberA }, { number: numberB }) => numberA - numberB)
  );
  console.log(
    `Результат функции ${selectionSort.name} совпадает с методом Array.sort = `,
    deepEqual(
      selectionSort([...users], ({ number: numberA }, { number: numberB }) => numberA - numberB),
      [...users].sort(({ number: numberA }, { number: numberB }) => numberA - numberB)
    )
  );

  // *** Проверка двухсторонней сортировки ***
  // (1) Простой массив
  // console.log(
  //   `Результат функции ${selectionSortDouble.name} совпадает с методом Array.sort = `,
  //   deepEqual(
  //     selectionSortDouble([...list]),
  //     [...list].sort((a, b) => a - b)
  //   )
  // );
  // (2) Массив из объектов
  // console.log(
  //   `Результат функции ${selectionSortDouble.name} совпадает с методом Array.sort = `,
  //   deepEqual(
  //     selectionSortDouble(
  //       [...users],
  //       ({ number: numberA }, { number: numberB }) => numberA - numberB
  //     ),
  //     [...users].sort(({ number: numberA }, { number: numberB }) => numberA - numberB)
  //   )
  // );

  // ***********************************************************
};

// *** references ***
// (1) англоязычная статья с пошаговым разбором алгоритма сортировки выбором
// https://dev.to/seanwelshbrown/implementing-a-selection-sort-algorithm-in-javascript-9of
// (2) 9 алгоритмов сортировки, о которых вас спросят на собеседовании
// https://habr.com/ru/companies/simbirsoft/articles/769312/
// (3) вариант двухсторонней сортировки выбором с визуализацией
// https://habr.com/ru/articles/422085/

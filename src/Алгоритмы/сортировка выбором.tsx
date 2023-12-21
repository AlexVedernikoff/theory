import { createArray } from "../zПрочее/createArray";
import { deepEqual } from "../Теория/deepEqual";

// Алгоритм сортировки выбором
export const selectionSortReact = () => {
  console.log("*** Сортировка массива выбором ***");
  // ***********************************************************
  // Пробуем написать самостоятельно
  function swap(a: number, b: number, arr: Array<any>) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }

  function selectionSort1(array) {
    for (let i = 0; i < array.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
    return array;
  }

  function selectionSort(array) {
    console.log("Сортируемый массив = ", array);
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
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
        if (array[j] > array[maxIndex]) {
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
  //   console.log(`массив для сортировки = `, list);
  //   swap(0, 1, list);
  console.log(`массив для сортировки = `, list);
  console.log(`отсортированный массив = `);
  //   console.log(selectionSort([...list]));

  console.log(
    `Результат функции ${selectionSort.name} совпадает с методом Array.sort = `,
    deepEqual(
      selectionSort([...list]),
      [...list].sort((a, b) => a - b)
    )
  );

  // ***********************************************************
};

// *** references ***
// (1) англоязычная статья с пошаговым разбором алгоритма сортировки выбором
// https://dev.to/seanwelshbrown/implementing-a-selection-sort-algorithm-in-javascript-9of
// (2) 9 алгоритмов сортировки, о которых вас спросят на собеседовании
// https://habr.com/ru/companies/simbirsoft/articles/769312/

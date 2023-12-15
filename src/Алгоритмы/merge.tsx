// функция merge принимает два отсортированных массива и возвращает новый отсортированный массив.

import { deepEqual } from "../Теория/deepEqual";

// *** вариант 1 через .splice() ***
function merge(leftArr: Array<any>, rghtArr: Array<any>) {
  const result: Array<any> = [];
  while (leftArr.length && rghtArr.length) {
    // если пишем простой sort без callback только для number, то делаем проверку leftArr[0] < rghtArr[0]
    //   callback(leftArr[0], rghtArr[0]) < 0
    leftArr[0] < rghtArr[0]
      ? result.push(...leftArr.splice(0, 1))
      : result.push(...rghtArr.splice(0, 1));
  }
  return result.concat(leftArr, rghtArr);
}

// *** вариант 2 через через счётчики позиций currLeft и сurrRight ***

function mergeAlt(leftArr: Array<any>, rghtArr: Array<any>) {
  const result: Array<any> = [];
  let [currLeft, currRight] = [0, 0];
  while (currLeft < leftArr.length && currRight < rghtArr.length) {
    //   console.log("currLeft, currRight = ", currLeft, currRight);
    if (leftArr[currLeft] < rghtArr[currRight]) {
      result.push(leftArr[currLeft]);
      currLeft++;
    } else {
      result.push(rghtArr[currRight]);
      currRight++;
    }
    //   console.log("result = ", result);
  }
  currLeft < leftArr.length && result.push(...leftArr.slice(currLeft));
  currRight < rghtArr.length && result.push(...rghtArr.slice(currLeft));

  return result;
}

// *** Проверка ***
const arr1 = [1, 5];
const arr2 = [-9, 2, 6, 8];
console.log(" merge([...arr1], [...arr2]) = ", merge([...arr1], [...arr2]));
console.log(" mergeAlt(arr1, arr2) = ", mergeAlt(arr1, arr2));
console.log(
  "сравниваем результат функции ",
  merge.name,
  "с методом .sort = ",
  deepEqual(
    merge([...arr1], [...arr2]),
    [...arr1, ...arr2].sort((a, b) => a - b)
  )
);
console.log(
  "\nсравниваем результат функции ",
  mergeAlt.name,
  " с методом .sort = ",
  deepEqual(
    mergeAlt(arr1, arr2),
    [...arr1, ...arr2].sort((a, b) => a - b)
  )
);

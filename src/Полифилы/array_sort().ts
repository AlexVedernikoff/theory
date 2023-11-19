/* eslint-disable no-extend-native */
// Это мутирующий метод, он изменяет (сортирует) исходный массив!
export const ArrayMySortPolyfill = () => {
  // **************************************************************************
  Array.prototype.mySort = function (callback = (a: any, b: any) => (String(a) < String(b) ? -1 : 1)) {
    const arraysToSort = this.map((el) => [el]);

    // функция merge принимает два отсортированных массива и создаёт из них один отсортиванный массив.
    function merge(leftArr: Array<any>, rghtArr: Array<any>) {
      const result: Array<any> = [];
      while (leftArr.length && rghtArr.length) {
        // если пишем простой sort без callback только для number, то делаем проверку leftArr[0] < rghtArr[0]
        callback(leftArr[0], rghtArr[0]) < 0 ? result.push(...leftArr.splice(0, 1)) : result.push(...rghtArr.splice(0, 1));
      }
      return result.concat(leftArr, rghtArr);
    }

    function sortArr(arraysToSort: number[][]) {
      //console.log("\n\n начинаем новый цикл, arraysToSort = ");  //console.table(arraysToSort);
      const sortedArr = arraysToSort.reduce((acc: number[][], _, i, arr) => {
        if (i % 2 === 0) {
          //console.log("Сравниваем между собой массивы: ", arr[i], "и ", arr[i + 1]);
          arr[i + 1] ? acc.push(merge(arr[i], arr[i + 1])) : acc.push(arr[i]);
          //console.log("acc = ");  //console.table(acc);
        }
        return acc;
      }, []);
      //console.table("result = ");  //console.table(sortedArr);
      if (sortedArr.length > 1) {
        return sortArr(sortedArr);
      } else {
        return sortedArr;
      }
    }
    return sortArr(arraysToSort)[0];
  };

  // *** тестируем ************************************************************
  const arr = [15, 6, 7, 8, 5, 1, 2, 4, 3, 10, 13, 12, 11];
  const arrL = ["z", "a", "c", "da"];

  console.log("\nВ лексикографическом порядке");
  console.log("arr.sort()   = ", [...arr].sort());
  console.log("arr.mySort() = ", [...arr].mySort());
  console.log("\nВ порядке возрастания чисел");
  console.log(
    "arr.sort()   = ",
    [...arr].sort((a, b) => a - b)
  );
  console.log(
    "arr.mySort() = ",
    [...arr].mySort((a, b) => a - b)
  );
  console.log("\nВ лексикографическом порядке");
  console.log("arr.sort()   = ", [...arrL].sort());
  console.log("arr.mySort() = ", [...arrL].mySort());
};

// Достигли ли мы конца какого-либо из массивов?
//     Нет:
//         Сравните текущие элементы обоих массивов
//         Скопируйте меньший элемент в отсортированный массив
//         Переместить указатель на элемент, содержащий меньший элемент
//     Да:
//         Скопировать все оставшиеся элементы непустого массива

// https://evileg.com/ru/post/466/

/* eslint-disable no-extend-native */
export const ArrayMySortPolyfill = () => {
  // **************************************************************************
  Array.prototype.mySort = function (callback = (a: any, b: any) => String(a) < String(b)) {
    function merge(leftArr: Array<any>, rghtArr: Array<any>) {
      const result: Array<any> = [];
      while (leftArr.length && rghtArr.length) {
        // if (leftArr[0] < rghtArr[0]) {
        // if (callback(leftArr[0], rghtArr[0]) > 0) {
        callback(leftArr[0], rghtArr[0]) > 0 ? result.push(...leftArr.splice(0, 1)) : result.push(...rghtArr.splice(0, 1));
        //     result.push(leftArr[0]);
        //     leftArr = leftArr.slice(1);
        //   } else {
        //     result.push(rghtArr[0]);
        //     rghtArr = rghtArr.slice(1);
        //   }
      }
      result.push(...leftArr, ...rghtArr);
      return result;
    }

    const oneElemArr = this.map((el) => [el]);
    const sortArr = (oneElemArr: number[][], i = 0) => {
      const result = oneElemArr.reduce((acc: number[][], leftArr, i, arr) => {
        if (i % 2 === 0) {
          let rghtArr = arr[i + 1];
          console.log("Сравниваем между собой массивы: ", leftArr, "и ", rghtArr);
          if (rghtArr) {
            acc.push(merge(leftArr, rghtArr));
          } else {
            acc.push(leftArr);
          }
        }
        return acc;
      }, []);
      console.log("result = ", result);
      if (result.length > 1) {
        return sortArr(result);
      } else {
        return result;
      }
    };
    return sortArr(oneElemArr)[0];
  };

  // *** тестируем ************************************************************
  const arr1 = [15, 6, 7, 8, 5, 1, 2, 4, 3, 10, 13, 12, 11];
  const arr2 = [15, 6, 7, 8, 5, 1, 2, 4, 3, 10, 13, 12, 11];

  console.log("arr1.sort()   = ", arr1.sort());
  console.log("arr2.mySort() = ", arr2.mySort());
};

// Достигли ли мы конца какого-либо из массивов?
//     Нет:
//         Сравните текущие элементы обоих массивов
//         Скопируйте меньший элемент в отсортированный массив
//         Переместить указатель на элемент, содержащий меньший элемент
//     Да:
//         Скопировать все оставшиеся элементы непустого массива

// https://evileg.com/ru/post/466/

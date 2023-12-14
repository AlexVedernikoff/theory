/* eslint-disable no-extend-native */
export const ArrayFindUniquePolyfill = () => {
  // Добавляем в прототип массива метод, который возвращает новый массив,
  // содержащий только уникальные элементы исходного массива (которые встречаются один и только один раз)
  // .filter - не мутирующий метод, поэтому исходный массив останется без изменений!
  Array.prototype.findUnique = function () {
    const counterMap = this.reduce((acc, el) => {
      acc[el] ? acc[el]++ : (acc[el] = 1);
      return acc;
    }, {});
    return this.filter((el) => counterMap[el] === 1);
  };

  // Способ 2.0 возвращаем только те элементы, для которых indexOf и lastIndexOf совпадают.
  Array.prototype.findUniqueVer20 = function () {
    return this.filter((el) => this.indexOf(el) === this.lastIndexOf(el));
  };

  const array01 = [10, 5, 10, 1, 6, 6, 7, 9, 9, 10]; // [5, 1, 7];
  const array02 = ["a", "a", "a", "b", "b", "b", "c"]; // ["c"]

  console.log("Array.findUnique(", array01, ") ", array01.findUnique());
  console.log("Array.findUnique(", array02, ") ", array02.findUnique());
  console.log("Array.findUnique20(", array01, ") ", array01.findUniqueVer20());
  console.log("Array.findUnique20(", array02, ") ", array02.findUniqueVer20());
};

/* eslint-disable no-extend-native */
export const ArrayFindUniquePolyfill = () => {
  Array.prototype.findUnique = function () {
    const counterMap = this.reduce((acc, el) => {
      acc[el] ? acc[el]++ : (acc[el] = 1);
      return acc;
    }, {});
    return this.reduce((acc, el) => {
      if (counterMap[el] === 1) acc.push(el);
      return acc;
    }, []);
  };

  console.log(
    "Array.findUnique(10, 5, 10, 1, 6, 6, 7, 9, 9, 10) = ",
    [10, 5, 10, 1, 6, 6, 7, 9, 9, 10].findUnique()
  );
  console.log(
    "Array.findUnique('a', 'a', 'a', 'b', 'b', 'b', 'c') = ",
    ["a", "a", "a", "b", "b", "b", "c"].findUnique()
  );
};

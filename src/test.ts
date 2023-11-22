// 2 Вернуть массив, который содержит только общие элементы обеих массивов
const arr01 = ["a", "c", 1, 2, 3, 4, 5, "a", 1];
const arr02 = ["a", "b", 1, 6, 3, 7, 5];

function common(...args) {
  const map = new Map();
  const mapArray = (arr, index) =>
    arr.map((el) => {
      const value = map.get(el) || {};
      const count = !value[index] ? 1 : value[index] + 1;
      map.set(el, { ...value, [index]: count });
    });
  args.forEach((arr, i) => mapArray(arr, i));

  return Array.from(map.keys()).reduce(
    (acc, key) =>
      args.length === Object.keys(map.get(key)).length ? acc.concat(key) : acc,
    []
  );
}

// *** проверка *****************************************************************

console.log("common(arr01, arr02) = ", common(arr01, arr02));

// **********************************************************************************************
// 2 Вернуть массив, который содержит только общие элементы обеих массивов (пересечиние массивов)
const arr2_01 = ["a", "c", 1, 2, 3, 4, 5, 1, "a"];
const arr2_02 = ["a", "b", 1, 6, 3, 7, 5];

export function commonElementsOfArrays(...arrays: Array<Array<any>>) {
  const map = new Map();
  const mapArray = (arr: Array<any>, index: number) =>
    arr.forEach((el) => {
      const value = map.get(el) || {};
      const count = !value[index] ? 1 : value[index] + 1;
      map.set(el, { ...value, [index]: count });
    });
  arrays.forEach((arr, i) => mapArray(arr, i));

  return Array.from(map.keys()).reduce(
    (acc, key) =>
      arrays.length === Object.keys(map.get(key)).length
        ? acc.concat(key)
        : acc,
    []
  );
}

// *** Пояснение ***
// (1) Множество map состоит из пар key: value по принципу
// {
//  "key": "a", "value": {"0": 2, "1": 1 }
// }
// то есть, элемент "a" 2 раза встречается в массиве "0" и 1 раз встречается в массиве "1"
// (2) map.get(key) позволяет получить value, записанное в map по ключу key
// например, по ключу "a" вернёт значение {"0": 2, "1": 1}
// (3) Object.keys(map.get(key))) возвращает массив из ключей объекта value ["0", "1"]  ((0 и 1) - индексы массивов, в которых встречается элемент)
// (4) возвращаем только те элементы, которые встречаются во всех массивах, т.е.
// arrays.length === Object.keys(map.get(key)).length;

// *** Тестирование ***

console.log(
  "common(arr01, arr02) = ",
  commonElementsOfArrays(arr2_01, arr2_02)
);
// должен вернуть ["a", 1, 3, 5]
// **********************************************************************************************

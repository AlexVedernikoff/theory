// задача: вернуть строку, состоящую из сконкатенированных значений value элементов коллекции,
// расположенных в обратном порядке символов,
// результат собирается только из непросроченных записей (expired: false)
// и конкатенируется в порядке возрастания order. Результат не содержит одинаковых символов.

const input = [
  { value: "abcd", order: 4, expired: false },
  { value: "qwer", order: 2, expired: true },
  { value: "xyz1", order: 1, expired: false },
  { value: "abx2", order: 3, expired: false },
];

type inputType = typeof input;

const resultString = (input: inputType) => {
  return input
    .filter(({ expired }) => !expired)
    .sort((item1, item2) => item1.order - item2.order)
    .map(({ value }) => value.split("").reverse().join(""))
    .reduce((acc, current) => [...new Set(acc + current)].join(""));
};

console.log(resultString(input)); // 1zyx2badc

// отфильтровать массив, оставив в нём только уникальные элементы
const arr = [1, 4, 5, "a", 1, 5, "a", "a", 2, 4, 5];
const uniqueArr = Array.from(new Set(arr)); // способ 1
const uniqueArrAlt = [...new Set(arr)]; // способ 2
console.log("uniqueArr = ", uniqueArr);
console.log("uniqueArrAlt = ", uniqueArrAlt);

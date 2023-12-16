// функция, которая создаёт массив длинной length из случайных чисел от 0 до max, не включая max.
export function createArray(length: number, max: number) {
  const result: number[] = [];
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  for (let i = 0; i < length; i++) {
    result.push(getRandomInt(max));
  }
  return result;
}

// вернуть случайное целое число от 0 до max, не включая max.
export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

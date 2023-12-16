import { createArray, getRandomInt } from "./zПрочее/createArray";
import { deepEqual } from "./Теория/deepEqual";

export const test = () => {
  // **********************************************************
  // *** Как поменять местами два элемента массива? ***********
  // **********************************************************
  const list = createArray(5, 5);
  const listS = [...list];
  const [i, j] = [getRandomInt(5), getRandomInt(5)];

  function swap(i: number, j: number, arr: Array<any>) {
    return ([arr[i], arr[j]] = [arr[j], arr[i]]);
  }

  function swapS(a: number, b: number, arr: Array<any>) {
    arr[a] = arr.splice(b, 1, arr[a])[0];
  }

  // *** Проверка ***
  console.log(`Меняем местами два элемента в массиве ${i} и  ${j}`);
  console.log(`\nВариант 1. Функция ${swap.name} (деструктуризация)`);
  console.log("Исходный массив =          ", list);
  console.log(`swap(${i}, ${j}, list) = `, swap(i, j, list));
  console.log("После заменты элементов =  ", list);
  console.log(`\nВариант 2. Функция ${swapS.name} (метод .splice())`);
  console.log("Исходный массив =          ", listS);
  swapS(i, j, listS);
  console.log("После заменты элементов =  ", listS);
  console.log(
    "Обе функции дают одинаковый результат = ",
    deepEqual(list, listS)
  );

  // *** references ***
  // через деструктуризацию
  // https://ru.stackoverflow.com/questions/615117/
  // через Array.splice()
  // https://qna.habr.com/q/568763?ysclid=lq8o4eno3x844429143
};

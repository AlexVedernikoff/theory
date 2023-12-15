export const deepEqual = (a, b) => {
  // проверяем на NaN
  if (Number.isNaN(a) && Number.isNaN(b)) return true;

  // проверяем на типы
  if (typeof a !== typeof b) return false;

  // проверяем, если не объект и а и б равны null
  if (typeof a !== "object" || a === null || b === null) return a === b;

  // если длины объектов не равны
  if (Object.keys(a).length !== Object.keys(b).length) return false;

  // рекурсивно проверяем вложенные значения по ключу
  for (const key of Object.keys(a)) {
    if (!deepEqual(a[key], b[key])) return false;
  }

  return true;
};

// эта функция успешно проходит тест на плафтофме Ката
// https://platform.kata.academy/user/courses/2/2/2/3

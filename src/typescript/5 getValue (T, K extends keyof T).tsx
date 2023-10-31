/* eslint-disable @typescript-eslint/no-unused-vars */
// <T,> нужна в .tsx файлах

export const RgetValue = () => {
  const developer = {
    name: "Ada",
    age: 16,
    skills: ["JavaScript", "TypeScript"],
  };
  // функция, которая принимает объект и возвращает значение ключа этого объекта
  // вариант 1
  const getValue = <T,>(obj: T, key: keyof T) => {
    return obj[key];
  };

  // вариант 2
  function getProperty<objectType, keyType extends keyof objectType>(
    object: objectType,
    key: keyType
  ) {
    return object[key];
  }

  console.log("value of object[key] = ", getValue(developer, "name"));
  console.log("value of object[key] = ", getProperty(developer, "skills"));
};

// можно записать проще
function getPropertyAlt<T, K extends keyof T>(object: T, key: K) {
  return object[key];
}

/* eslint-disable @typescript-eslint/no-unused-vars */
// Как получить тип элемента массива?
// How to get type of array items?

const people = [
  { name: "Alex", age: 20 },
  { name: "Marta", age: 18 },
  { name: "Lisa", age: 17 },
];
// ] as const;

type People = (typeof people)[number];

// теперь тип People соответствует типу объектов, из которых состоит массив people.
// type People = {
//   name: string;
//   age: number;
// };

// Как получить union из values ключей "name" объектов, из которых состоит массив people?

type PeopleNames = (typeof people)[number]["name"];
// теперь type PeopleNames = string
// или type PeopleNames = "Alex" | "Marta" | "Lisa" если "[] as const"

// https://steveholgado.com/typescript-types-from-arrays/

// Как получить тип union из типов values некоторых ключей объекта?
const Article = {
  id: 1,
  author: "Alex",
  content: "содержимое статьи",
};

type someArticleValues = (typeof Article)["id" | "author"];
// теперь type someArticleValues = string | number;

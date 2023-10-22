/* eslint-disable @typescript-eslint/no-unused-vars */
// typeScript Как получить тип элемента массива?
// How to get type of array items?

const animals = [
  { species: "cat", name: "Мурка" },
  { species: "dog", name: "Дружок" },
  { species: "mouse", name: "Микки Маус" },
];

type Animal = (typeof animals)[number];

// теперь тип Animal соответствует типу объектов, из которых состоит массив animals.
// type Animal = {
//     species: string;
//     name: string;
// }

// Как получить тип ключей "species" объектов, из которых состоит массив animals?

type AnimalSpecies = (typeof animals)[number]["species"];
// теперь type AnimalSpecies = string

// https://steveholgado.com/typescript-types-from-arrays/

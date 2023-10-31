/* eslint-disable @typescript-eslint/no-unused-vars */
// 1 Как типизировать массив из объектов?
type ArrayOfObjects = Array<{ id: number; name: string }>;
type ArrayOfObjects1 = { id: number; name: string }[];
const users: ArrayOfObjects1 = [
  { id: 1, name: "Ada" },
  { id: 2, name: "Alise" },
];

// 2 Как типизировать массив из объектов при помощи interface?

interface IArrayOfObjects {
  [index: number]: { id: number; label: string };
}

const list: IArrayOfObjects = [
  {
    id: 1,
    label: "label",
  },
];

// https://www.typescriptlang.org/docs/handbook/2/objects.html

// 3 тип, в котором ключами будут элементы массива строк

const roles = ["QE", "SQM"] as const;

type RDropDownItems = Partial<Record<(typeof roles)[number], string[]>>;

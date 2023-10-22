/* eslint-disable @typescript-eslint/no-unused-vars */
// Как типизировать массив из объектов?
type ArrayOfObjects = Array<{ id: number; name: string }>;
type ArrayOfObjects1 = { id: number; name: string }[];
const users: ArrayOfObjects1 = [
  { id: 1, name: "Ada" },
  { id: 2, name: "Alise" },
];

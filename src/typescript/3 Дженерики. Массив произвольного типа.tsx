/* eslint-disable @typescript-eslint/no-unused-vars */
// Дженерики. Массив произвольного типа.

type ArrayOf<T> = T[];
const listId: ArrayOf<number> = [1, 2];
const ListNames: ArrayOf<string> = ["Ada", "Dina"];

// Альтернативный вариант записи
const listIdAlt: Array<number> = [1, 2];
const ListNamesAlt: Array<string> = ["Ada", "Dina"];

// Полифил на Partial

type person = { name: string; age: number };
type personP = Partial<person>;

type myPartial<T> = {
  [P in keyof T]?: T[P];
};

type personMP = myPartial<person>;

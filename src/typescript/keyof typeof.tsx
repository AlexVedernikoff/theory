const developer = {
  name: "Ada",
  age: 16,
  skills: ["JavaScript", "TypeScript"],
};

type devType = typeof developer;
type devTypeKeys = keyof typeof developer;

// Полифил на Partial

type person = { name: string; age: number };
type personP = Partial<person>;

type myPartial<T> = {
  [P in keyof T]?: T[P];
};

type personMP = myPartial<person>;

//

type Language = "EN" | "DE" | "IT";
type TDocument = {
  [index in Language]: boolean;
};

type OptionsFlags<Type> = {
  [Property in keyof Type]?: boolean;
};

const test1: OptionsFlags<devType> = {
  name: true,
};

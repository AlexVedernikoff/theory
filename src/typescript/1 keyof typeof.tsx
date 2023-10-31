const developer = {
  name: "Ada",
  age: 16,
  skills: ["JavaScript", "TypeScript"],
};

type devType = typeof developer; // тип, соответствующий объекту
type devTypeKeys = keyof typeof developer; // union из списка ключей этого объекта
